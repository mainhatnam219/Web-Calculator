# Windows 11 Calculator - Web Application (Basic Mode)

## 📘 Project Overview

A fully functional web-based calculator that replicates the **Basic Mode** of Windows 11 Calculator. Built with pure HTML, CSS, and JavaScript (ES6+), this calculator provides a modern, responsive user interface with comprehensive arithmetic operations and keyboard support.


---

## 🧰 Functional Specifications

### Purpose and Scope
This calculator application provides standard arithmetic operations with a user-friendly interface similar to Windows 11's native calculator. It runs entirely in the browser without requiring any backend services.

### Supported Features

#### 1. **Number Input**
- Digits 0-9
- Decimal point (.)
- Maximum 16 digits input
- Thousand separators for better readability

#### 2. **Basic Arithmetic Operations**
- Addition (+)
- Subtraction (−)
- Multiplication (×)
- Division (÷)
- **Left-to-right evaluation** (not PEMDAS order)

#### 3. **Special Functions**
- **Percentage (%)**: Calculate percentage of operand or divide by 100
- **Square Root (√x)**: Calculate square root of current value
- **Square (x²)**: Calculate square of current value
- **Reciprocal (1/x)**: Calculate reciprocal of current value
- **Negate (±)**: Toggle between positive and negative

#### 4. **Clear Functions**
- **C (Clear)**: Reset calculator to initial state
- **CE (Clear Entry)**: Clear current input only
- **Backspace (⌫)**: Delete last digit

#### 5. **Display System**
- **Primary Display**: Shows current input or result (up to 16 digits)
- **Secondary Display**: Shows operation history
- Real-time updates with visual feedback

#### 6. **Keyboard Support**
- Number keys: 0-9
- Operators: +, -, *, /
- Enter or = for equals
- Backspace for delete
- Escape for clear all
- Delete for clear entry
- % for percentage
- . or , for decimal point

### User Input Handling
1. **Number Input**: Appends to current value, replaces if waiting for new input
2. **Operator Input**: Performs pending calculation (left-to-right), stores operator
3. **Equals**: Executes calculation and displays result
4. **Special Functions**: Immediately operate on current value

### Assumptions
- Results are rounded to 10 decimal places to avoid floating-point errors
- Very large/small numbers display in scientific notation (e-notation)
- Division by zero shows error message
- Square root of negative numbers shows error message
- Calculator maintains state between operations for continuous calculations

---

## ⚙️ Non-Functional Specifications

### Performance
- **Instant Response**: All calculations execute in < 1ms
- **Smooth Updates**: Display updates without flickering
- **Efficient Rendering**: CSS Grid for optimal layout performance
- **Minimal Memory Usage**: Single-page application with no memory leaks

### Usability
- **Intuitive Interface**: Mimics Windows 11 Calculator design
- **Clear Visual Hierarchy**: Distinct button types (numbers, operators, functions)
- **Touch-Friendly**: Larger buttons on mobile devices (minimum 60px)
- **Keyboard Navigation**: Full keyboard support for power users
- **Accessibility**: 
  - Semantic HTML structure
  - ARIA labels for screen readers
  - Focus indicators for keyboard navigation
  - High contrast mode support

### Cross-Browser Compatibility
Tested and verified on:
- ✅ Google Chrome (latest)
- ✅ Microsoft Edge (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Responsiveness
- **Desktop (1024px+)**: Centered layout, optimal button sizes
- **Tablet (768px-1023px)**: Larger buttons for touch
- **Mobile (320px-767px)**: Full-width layout, touch-optimized
- **Landscape Mode**: Adjusted layout for horizontal orientation
- **No Horizontal Scroll**: Works on all screen sizes

### Reliability
- **Error Handling**: Graceful handling of edge cases
- **State Management**: Consistent calculator state across operations
- **Input Validation**: Prevents invalid operations

### Maintainability
- **Clean Code**: Well-organized, commented, ES6+ syntax
- **Modular Structure**: Object-oriented Calculator class
- **Separation of Concerns**: HTML structure, CSS styling, JS logic separated
- **Scalable**: Easy to add new features or modify existing ones


## 📞 Contact

For questions or feedback, please contact: mainhatnam01@gmail.com

---

**Last Updated**: October 22, 2025
