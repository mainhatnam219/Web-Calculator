/**
 * =====================================================
 * WINDOWS 11 CALCULATOR - JAVASCRIPT IMPLEMENTATION
 * =====================================================
 * 
 * Features:
 * - Basic arithmetic operations (+, -, ×, ÷)
 * - Left-to-right evaluation (not PEMDAS)
 * - Special functions (%, √, ±, x², 1/x)
 * - Clear functions (CE, C, Backspace)
 * - Error handling (division by zero, square root of negative)
 * - Keyboard support
 * - Real-time display updates
 */

class Calculator {
    constructor() {
        // Display elements
        this.primaryDisplay = document.getElementById('primaryDisplay');
        this.secondaryDisplay = document.getElementById('secondaryDisplay');
        
        // Calculator state
        this.currentValue = '0';           // Current input value
        this.previousValue = null;         // Previous operand
        this.operator = null;              // Current operator
        this.waitingForNewValue = false;   // Flag for new input
        this.lastResult = null;            // Store last calculation result
        this.operationHistory = '';        // Display history in secondary
        
        // Initialize event listeners
        this.initializeEventListeners();
    }

    /**
     * Initialize all event listeners for buttons
     */
    initializeEventListeners() {
        // Number buttons
        document.querySelectorAll('.btn-number').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const number = e.target.getAttribute('data-number');
                const action = e.target.getAttribute('data-action');
                
                if (number !== null) {
                    this.inputNumber(number);
                } else if (action === 'decimal') {
                    this.inputDecimal();
                }
            });
        });

        // Operator buttons
        document.querySelectorAll('.btn-operator').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const operator = e.target.getAttribute('data-operator');
                this.inputOperator(operator);
            });
        });

        // Function buttons
        document.querySelectorAll('.btn-function').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.getAttribute('data-action');
                this.handleFunction(action);
            });
        });

        // Equals button
        document.querySelector('.btn-equals').addEventListener('click', () => {
            this.calculate();
        });

        // Keyboard support
        this.initializeKeyboardSupport();
    }

    /**
     * Initialize keyboard event listeners
     */
    initializeKeyboardSupport() {
        document.addEventListener('keydown', (e) => {
            // Prevent default for calculator keys
            if (this.isCalculatorKey(e.key)) {
                e.preventDefault();
            }

            // Numbers 0-9
            if (/^[0-9]$/.test(e.key)) {
                this.inputNumber(e.key);
            }
            
            // Decimal point
            else if (e.key === '.' || e.key === ',') {
                this.inputDecimal();
            }
            
            // Operators
            else if (e.key === '+') {
                this.inputOperator('+');
            }
            else if (e.key === '-') {
                this.inputOperator('-');
            }
            else if (e.key === '*') {
                this.inputOperator('*');
            }
            else if (e.key === '/') {
                this.inputOperator('/');
            }
            
            // Equals
            else if (e.key === 'Enter' || e.key === '=') {
                this.calculate();
            }
            
            // Backspace
            else if (e.key === 'Backspace') {
                this.backspace();
            }
            
            // Clear all (Escape)
            else if (e.key === 'Escape') {
                this.clear();
            }
            
            // Clear entry (Delete)
            else if (e.key === 'Delete') {
                this.clearEntry();
            }
            
            // Percent
            else if (e.key === '%') {
                this.handleFunction('percent');
            }
        });
    }

    /**
     * Check if the key is a calculator key to prevent default
     */
    isCalculatorKey(key) {
        const calculatorKeys = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            '.', ',', '+', '-', '*', '/', 'Enter', '=', 'Backspace', 
            'Escape', 'Delete', '%'
        ];
        return calculatorKeys.includes(key);
    }

    /**
     * Handle number input
     */
    inputNumber(num) {
        // If waiting for new value, replace current value
        if (this.waitingForNewValue) {
            this.currentValue = num;
            this.waitingForNewValue = false;
        } else {
            // Limit to 16 digits
            if (this.currentValue.replace(/[^0-9]/g, '').length >= 16) {
                return;
            }
            
            // Replace 0 or append number
            if (this.currentValue === '0') {
                this.currentValue = num;
            } else {
                this.currentValue += num;
            }
        }
        
        this.updateDisplay();
    }

    /**
     * Handle decimal point input
     */
    inputDecimal() {
        if (this.waitingForNewValue) {
            this.currentValue = '0.';
            this.waitingForNewValue = false;
        } else if (!this.currentValue.includes('.')) {
            this.currentValue += '.';
        }
        
        this.updateDisplay();
    }

    /**
     * Handle operator input (+, -, *, /)
     */
    inputOperator(op) {
        const currentNum = parseFloat(this.currentValue);
        
        // If there's a pending operation, calculate it first
        if (this.operator && !this.waitingForNewValue) {
            this.calculate();
        } else {
            this.previousValue = currentNum;
        }
        
        this.operator = op;
        this.waitingForNewValue = true;
        
        // Update secondary display with operation history
        this.updateSecondaryDisplay();
    }

    /**
     * Perform calculation (left-to-right evaluation)
     */
    calculate() {
        if (this.operator === null || this.previousValue === null) {
            return;
        }
        
        const prev = this.previousValue;
        const current = parseFloat(this.currentValue);
        let result;
        
        // Perform operation based on operator
        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                // Handle division by zero
                if (current === 0) {
                    this.showError('Cannot divide by zero');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }
        
        // Update state with result
        this.currentValue = this.formatResult(result);
        this.lastResult = result;
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewValue = true;
        
        // Update displays
        this.secondaryDisplay.textContent = '';
        this.updateDisplay();
    }

    /**
     * Handle special functions
     */
    handleFunction(action) {
        switch (action) {
            case 'percent':
                this.percent();
                break;
            case 'square-root':
                this.squareRoot();
                break;
            case 'square':
                this.square();
                break;
            case 'reciprocal':
                this.reciprocal();
                break;
            case 'negate':
                this.negate();
                break;
            case 'clear':
                this.clear();
                break;
            case 'clear-entry':
                this.clearEntry();
                break;
            case 'backspace':
                this.backspace();
                break;
        }
    }

    /**
     * Calculate percentage
     * If there's an operator, calculate % of previous value
     * Otherwise, divide current value by 100
     */
    percent() {
        const current = parseFloat(this.currentValue);
        
        if (this.operator && this.previousValue !== null) {
            // Calculate percentage of previous value
            const result = (this.previousValue * current) / 100;
            this.currentValue = this.formatResult(result);
        } else {
            // Simply divide by 100
            const result = current / 100;
            this.currentValue = this.formatResult(result);
        }
        
        this.waitingForNewValue = true;
        this.updateDisplay();
    }

    /**
     * Calculate square root
     */
    squareRoot() {
        const current = parseFloat(this.currentValue);
        
        // Handle negative numbers
        if (current < 0) {
            this.showError('Invalid input');
            return;
        }
        
        const result = Math.sqrt(current);
        this.currentValue = this.formatResult(result);
        this.waitingForNewValue = true;
        this.updateDisplay();
        this.updateSecondaryDisplay(`√(${current})`);
    }

    /**
     * Calculate square (x²)
     */
    square() {
        const current = parseFloat(this.currentValue);
        const result = current * current;
        this.currentValue = this.formatResult(result);
        this.waitingForNewValue = true;
        this.updateDisplay();
        this.updateSecondaryDisplay(`sqr(${current})`);
    }

    /**
     * Calculate reciprocal (1/x)
     */
    reciprocal() {
        const current = parseFloat(this.currentValue);
        
        // Handle division by zero
        if (current === 0) {
            this.showError('Cannot divide by zero');
            return;
        }
        
        const result = 1 / current;
        this.currentValue = this.formatResult(result);
        this.waitingForNewValue = true;
        this.updateDisplay();
        this.updateSecondaryDisplay(`1/(${current})`);
    }

    /**
     * Negate current value (toggle +/-)
     */
    negate() {
        if (this.currentValue === '0') return;
        
        if (this.currentValue.startsWith('-')) {
            this.currentValue = this.currentValue.substring(1);
        } else {
            this.currentValue = '-' + this.currentValue;
        }
        
        this.updateDisplay();
    }

    /**
     * Clear all (C)
     */
    clear() {
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewValue = false;
        this.lastResult = null;
        this.operationHistory = '';
        this.secondaryDisplay.textContent = '';
        this.primaryDisplay.classList.remove('error');
        this.updateDisplay();
    }

    /**
     * Clear entry (CE) - Clear only current input
     * Keeps the operator and previous value
     */
    clearEntry() {
        this.currentValue = '0';
        // If we were waiting for new value, keep that state
        // Otherwise, reset to not waiting
        if (!this.waitingForNewValue) {
            this.waitingForNewValue = false;
        }
        this.primaryDisplay.classList.remove('error');
        this.updateDisplay();
    }

    /**
     * Backspace - Delete last digit
     */
    backspace() {
        // If waiting for new value, reset to 0 and stop waiting
        if (this.waitingForNewValue) {
            this.currentValue = '0';
            this.waitingForNewValue = false;
            this.updateDisplay();
            return;
        }
        
        // Don't do anything if already at 0
        if (this.currentValue === '0') {
            return;
        }
        
        if (this.currentValue.length > 1) {
            this.currentValue = this.currentValue.slice(0, -1);
            
            // If only minus sign left, reset to 0
            if (this.currentValue === '-') {
                this.currentValue = '0';
            }
        } else {
            this.currentValue = '0';
        }
        
        this.updateDisplay();
    }

    /**
     * Format result for display
     */
    formatResult(num) {
        // Handle very large or very small numbers
        if (Math.abs(num) > 9999999999999999 || 
            (Math.abs(num) < 0.0000000000000001 && num !== 0)) {
            return num.toExponential(10);
        }
        
        // Round to avoid floating point errors
        const rounded = Math.round(num * 1e10) / 1e10;
        
        // Convert to string and limit decimal places
        let result = rounded.toString();
        
        // Limit total display length
        if (result.length > 16) {
            result = rounded.toPrecision(12);
        }
        
        return result;
    }

    /**
     * Update primary display
     */
    updateDisplay() {
        // Format number with thousand separators for display
        const displayValue = this.formatDisplayNumber(this.currentValue);
        this.primaryDisplay.textContent = displayValue;
    }

    /**
     * Update secondary display with operation history
     */
    updateSecondaryDisplay(customText = null) {
        if (customText) {
            this.secondaryDisplay.textContent = customText;
            return;
        }
        
        if (this.previousValue !== null && this.operator) {
            const operatorSymbol = this.getOperatorSymbol(this.operator);
            this.secondaryDisplay.textContent = `${this.previousValue} ${operatorSymbol}`;
        }
    }

    /**
     * Get operator symbol for display
     */
    getOperatorSymbol(op) {
        const symbols = {
            '+': '+',
            '-': '−',
            '*': '×',
            '/': '÷'
        };
        return symbols[op] || op;
    }

    /**
     * Format number for display (with thousand separators)
     */
    formatDisplayNumber(numStr) {
        // Don't format if it's being typed or contains decimal point at end
        if (numStr.endsWith('.') || numStr === '-') {
            return numStr;
        }
        
        // Parse the number
        const num = parseFloat(numStr);
        
        // Return as-is if not a valid number
        if (isNaN(num)) {
            return numStr;
        }
        
        // For very large/small numbers in scientific notation
        if (numStr.includes('e')) {
            return numStr;
        }
        
        // Split into integer and decimal parts
        const parts = numStr.split('.');
        const integerPart = parts[0];
        const decimalPart = parts[1];
        
        // Add thousand separators to integer part
        const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        
        // Combine with decimal part if exists
        return decimalPart !== undefined ? 
            `${formattedInteger}.${decimalPart}` : 
            formattedInteger;
    }

    /**
     * Show error message
     */
    showError(message) {
        this.primaryDisplay.textContent = message;
        this.primaryDisplay.classList.add('error');
        this.currentValue = '0';
        this.previousValue = null;
        this.operator = null;
        this.waitingForNewValue = true;
        
        // Remove error class after 2 seconds
        setTimeout(() => {
            this.primaryDisplay.classList.remove('error');
            this.updateDisplay();
        }, 2000);
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
    
    // Add visual feedback for button presses
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
});
