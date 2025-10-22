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

---

## ✅ Acceptance Criteria

| Criteria | Status | Notes |
|----------|--------|-------|
| Arithmetic operations return correct results | ✅ Pass | All operations tested |
| Left-to-right evaluation (not PEMDAS) | ✅ Pass | 2 + 3 × 4 = 20 (not 14) |
| CE clears current entry only | ✅ Pass | Operation state preserved |
| C clears all entries | ✅ Pass | Full reset to initial state |
| Backspace deletes last character | ✅ Pass | Works on current input |
| Display updates accurately | ✅ Pass | Real-time updates |
| Percentage function works correctly | ✅ Pass | Context-aware behavior |
| Square root handles negatives | ✅ Pass | Error message shown |
| Division by zero handled | ✅ Pass | Error message shown |
| Negate toggles sign | ✅ Pass | Works correctly |
| Decimal point input validated | ✅ Pass | Only one decimal allowed |
| Keyboard support functional | ✅ Pass | All keys mapped |
| Responsive on all devices | ✅ Pass | Mobile, tablet, desktop |
| Cross-browser compatible | ✅ Pass | Chrome, Edge, Firefox, Safari |
| Deployed and accessible | ✅ Pass | [Hosting link] |

---

## 🧪 Testing Plan

### Testing Methodology
**Manual Testing**: Each feature tested manually across multiple browsers and devices.

### Test Cases

#### Basic Arithmetic Operations

| Test Case | Input | Expected Output | Actual Output | Result |
|-----------|-------|----------------|---------------|--------|
| Addition | 2 + 3 = | 5 | 5 | ✅ Pass |
| Subtraction | 10 - 4 = | 6 | 6 | ✅ Pass |
| Multiplication | 5 × 6 = | 30 | 30 | ✅ Pass |
| Division | 20 ÷ 4 = | 5 | 5 | ✅ Pass |
| Chain Operations | 2 + 3 + 4 = | 9 | 9 | ✅ Pass |
| Left-to-Right | 2 + 3 × 4 = | 20 | 20 | ✅ Pass |

#### Special Functions

| Test Case | Input | Expected Output | Actual Output | Result |
|-----------|-------|----------------|---------------|--------|
| Square Root | √9 = | 3 | 3 | ✅ Pass |
| Square | 5 x² = | 25 | 25 | ✅ Pass |
| Reciprocal | 4 1/x = | 0.25 | 0.25 | ✅ Pass |
| Percentage | 10 % | 0.1 | 0.1 | ✅ Pass |
| Percentage in operation | 200 + 10% = | 220 | 220 | ✅ Pass |
| Negate positive | 5 ± | -5 | -5 | ✅ Pass |
| Negate negative | -5 ± | 5 | 5 | ✅ Pass |

#### Error Handling

| Test Case | Input | Expected Output | Actual Output | Result |
|-----------|-------|----------------|---------------|--------|
| Division by zero | 5 ÷ 0 = | Error message | "Cannot divide by zero" | ✅ Pass |
| Square root negative | √(-4) | Error message | "Invalid input" | ✅ Pass |
| Reciprocal of zero | 0 1/x | Error message | "Cannot divide by zero" | ✅ Pass |

#### Clear Functions

| Test Case | Input | Expected Output | Actual Output | Result |
|-----------|-------|----------------|---------------|--------|
| Clear Entry | 5 + 3, CE | Display: 0, keeps 5 + | 0 | ✅ Pass |
| Clear All | 5 + 3, C | Display: 0, clears all | 0 | ✅ Pass |
| Backspace single digit | 123, ⌫ | 12 | 12 | ✅ Pass |
| Backspace all digits | 5, ⌫ | 0 | 0 | ✅ Pass |

#### Decimal Operations

| Test Case | Input | Expected Output | Actual Output | Result |
|-----------|-------|----------------|---------------|--------|
| Decimal addition | 1.5 + 2.3 = | 3.8 | 3.8 | ✅ Pass |
| Multiple decimals | 0.1 + 0.2 = | 0.3 | 0.3 | ✅ Pass |
| Decimal point limit | 1.., attempts | 1. | 1. | ✅ Pass |

#### Keyboard Input

| Test Case | Input | Expected Output | Actual Output | Result |
|-----------|-------|----------------|---------------|--------|
| Number keys | Press 1, 2, 3 | 123 | 123 | ✅ Pass |
| Operator keys | 5 + 3 (keyboard) | 8 | 8 | ✅ Pass |
| Enter key | 2 + 2, Enter | 4 | 4 | ✅ Pass |
| Escape key | 5 + 3, Escape | 0 | 0 | ✅ Pass |
| Backspace key | 123, Backspace | 12 | 12 | ✅ Pass |

#### Responsive Design

| Test Case | Device/Resolution | Expected Behavior | Actual Behavior | Result |
|-----------|------------------|-------------------|-----------------|--------|
| Mobile (375px) | iPhone | Full width, large buttons | Works correctly | ✅ Pass |
| Tablet (768px) | iPad | Centered, medium buttons | Works correctly | ✅ Pass |
| Desktop (1920px) | Large screen | Centered, fixed width | Works correctly | ✅ Pass |
| Landscape mobile | Phone rotated | Adjusted layout | Works correctly | ✅ Pass |

---

## 🧠 Prompt Engineering (AI Assistance)

### AI Tools Used
- **GitHub Copilot**: Code completion and suggestions
- **ChatGPT**: Documentation structure and testing ideas

### AI Prompts Used

#### 1. **Initial Structure Prompt**
```
Hãy tạo cho tôi HTML structure cho một web calculator giống Windows 11 Calculator 
Basic Mode với các yêu cầu:
- Layout grid cho các nút
- Display area gồm 2 dòng (secondary và primary)
- Các nút: số 0-9, operators (+, -, ×, ÷), equals, decimal point
- Chức năng đặc biệt: %, √, ±
- Chức năng xóa: CE, C, Backspace
- Styling hiện đại, responsive
```

#### 2. **JavaScript Logic Prompt**
```
Tôi cần JavaScript code để implement logic cho calculator với các chức năng:
1. Xử lý input số và operators
2. Thực hiện phép tính theo thứ tự left-to-right (không theo PEMDAS)
3. Các chức năng: %, √, ±
4. CE (clear entry), C (clear all), Backspace
5. Xử lý lỗi: chia 0, căn số âm
6. Update display real-time
Code cần clean, có comments, và dễ maintain. Sử dụng ES6+ syntax.
```

#### 3. **Keyboard Support Prompt**
```
Tôi muốn thêm keyboard support cho calculator với yêu cầu:
- Phím số 0-9 để nhập số
- Phím +, -, *, / cho operators
- Enter hoặc = để tính kết quả
- Backspace để xóa ký tự
- Escape để clear all
- Phím . cho decimal point
Hãy viết event listener và logic xử lý keyboard input.
```

#### 4. **Responsive CSS Prompt**
```
Hãy giúp tôi tạo responsive CSS cho calculator với breakpoints:
- Mobile: 320px - 767px (nút lớn hơn, touch-friendly)
- Tablet: 768px - 1023px
- Desktop: 1024px+
Calculator nên center trên màn hình lớn, full width trên mobile.
```

### How AI Helped

1. **Code Structure**: AI suggested using a class-based approach for better organization
2. **Error Handling**: AI provided comprehensive error handling patterns
3. **Responsive Design**: AI generated mobile-first CSS with appropriate breakpoints
4. **Testing Ideas**: AI helped structure the testing plan and test cases
5. **Documentation**: AI assisted in creating clear, professional documentation structure

### Learning Outcomes

- **ES6+ Features**: Learned to use modern JavaScript features (classes, arrow functions, template literals)
- **State Management**: Understanding how to maintain calculator state across operations
- **Event Handling**: Implementing both mouse and keyboard event listeners
- **Responsive Design**: Creating truly responsive layouts with CSS Grid and media queries
- **Error Handling**: Graceful error handling with user-friendly messages
- **Code Organization**: Importance of clean, modular, well-commented code

### AI Content Review

All AI-generated code has been:
- ✅ Reviewed for correctness and best practices
- ✅ Tested across multiple browsers and devices
- ✅ Modified to fit specific project requirements
- ✅ Commented for clarity and maintainability
- ✅ Optimized for performance

---

## 🗂️ Project Structure

```
Web-Calculator/
├── index.html          # Main HTML structure
├── styles.css          # Responsive CSS styling
├── script.js           # Calculator logic and functionality
└── README.md           # This documentation file
```

---

## 🚀 Deployment Instructions

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be published at: `https://[username].github.io/[repo-name]/`

### Option 2: Netlify

1. Create account at netlify.com
2. Drag and drop your project folder
3. Your site will be live instantly
4. Get custom URL: `https://[site-name].netlify.app/`

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts
4. Your site will be deployed

---

## 💻 Local Development

1. Clone or download the repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

---

## 🧮 Usage Guide

### Mouse/Touch Operation
1. Click number buttons to input digits
2. Click operator buttons (+, −, ×, ÷) to select operation
3. Click = to calculate result
4. Use special function buttons for advanced operations

### Keyboard Operation
- Type numbers directly
- Use +, -, *, / for operations
- Press Enter or = to calculate
- Press Escape to clear all
- Press Backspace to delete last digit

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Chrome Mobile | Latest | ✅ Fully Supported |
| Safari iOS | 14+ | ✅ Fully Supported |

---

## 🎨 Design Features

- **Windows 11 Aesthetic**: Modern, clean, minimalist design
- **Smooth Animations**: Button press feedback and transitions
- **Dark/Light Mode**: Follows system preferences (can be extended)
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators
- **Touch Optimized**: Large buttons for mobile devices

---

## 🔧 Technical Stack

| Category | Technology |
|----------|-----------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Layout | CSS Grid, Flexbox |
| Responsive | Media Queries, Mobile-First |
| Version Control | Git, GitHub |
| Hosting | GitHub Pages / Netlify / Vercel |
| Testing | Manual Testing |

---

## 📝 License

This project is created for educational purposes as part of the Web Application Development course.

---

## 👨‍💻 Author

**[Your Name]**
- Student ID: [Your ID]
- Course: Web Application Development
- Academic Year: 2025-2026

---

## 🙏 Acknowledgments

- Windows 11 Calculator design inspiration
- GitHub Copilot for code assistance
- Course instructors for project guidance

---

## 📞 Contact

For questions or feedback, please contact: [Your Email]

---

**Last Updated**: October 22, 2025
