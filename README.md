# SmartCompute - The customizable Calculator PWA

## **Goals**

This Project will eventually feature standard Progressive Web App (PWA) features, like installing, caching and offline use.
For now, it will act as a standard website.
The Calculator App itself tries to expand capabilities of modern calculator apps which are either:
 - not customizable, 
 - payed  
 - or full of ads 
 
 ... which is a shame and does not let their users fully utilize the power of their mobile computing devices they have on hand.
 
 ## Features
 
 ### Graphing Calculator 
 
 Closely mimics Graphing calculators you can buy in store, just with more
 - colors, 
 - expandability 
 - and utitities 
 
 built in.
 
 ### Converters
 
 Includes the standard unit converters for length, currency or volume. 
 - Implements custom API calls to get up to date currency exchange information.
 - Allows the user to add their own metrics to convert to/from
 - Can be marked as favorites for even faster access times
 
 ### Freehand Calculation
 
 - Uses tensorflow AI to recognize the user's handwriting and calculates the formula
 
 ### Basic Calculator
 
 - User can swap between predefined input templates and custom ones which they create themselves
 
 ### Color customization
 
 1. Dark/Light mode support
 2. Android Material You support
 
 ## Milestones
 
 - [ ] Calculating
<<<<<<< main
    - [ ] Asynchronous Calculating pipeline with time measurement
       - [ ] Simplification
          - [ ] Variable seperation
          - [ ] Compute steps compressed to fewer threads
       - [ ] Calculation
          - [ ] Sigma using for loops
          - [ ] Precedence (parentheses, left to right etc.)
       - [ ] Value output
          - [ ] Rounding bit errors without skewing exactness
          - [ ] Output multiple values…? ASine for example (x,x’)
          - [ ] Multiple value calculation (L{})
          - [ ] Function output, derivative output
          - [ ] Unit as suffix
          - [ ] (Term and value) Spelling in
             - [ ] German
             - [ ] English
          - [ ] Term sharing as JSON or plain text
    - [ ] Variable incorporation (default xyz)
    - [ ] Graphing
       - [ ] Intersection, angle and distance of points
       - [ ] Multiple Formulas
    - [ ] Converters
       - [ ] Add own converters
       - [ ] Unit converters
          - [ ] Semi-live volatile currency value reflection
       - [ ] Mark favorite
       - [ ] Categorized and indexed, can be searched 
=======
    - [ ] Asynchronous Calculating with time
    - [ ] Variable incorporation
    - [ ] Term pronounciation (DE and EN)
>>>>>>> origin/main
 - [ ] Button Layouting
    - [ ] Responsive Design
       - [x] Mobile
       - [ ] Tablets and PCs 
    - [ ] Different navigatable Keypad presets
 - [ ] Display Rendering
    - [ ] Copy/paste and custom term shortcuts
    - [ ] Graph visualization
    - [ ] SVG ~~or Canvas~~
       - [ ] Native HTML Textfields
       - [ ] Backdrop Square root rendering
       - [ ] Nested Superscripts for exponentiation
       - [ ] Waved Text underline decoration with CSS class selection for errors (red) and problems (yellow)
       - [ ] Error and problem message
       - [ ] Pair parenthesis with matching colors 
       - [ ] Fraction Rendering
    - [ ] Keyboard Support
    - [ ] Navigate with arrows
    - [x] Cursor indicator
 - [ ] PWA features
    - [ ] App Icon (SVG)
    - [ ] Installation
    - [ ] Offline Support
    - [ ] Caching of preferences
  - [ ] Settings
    - [ ] Color Customization
       - [ ] Dark and Light mode
       - [ ] Additive Android Material You Support
    - [ ] Offline mode (no updating)
    - [ ] Recursive Stacking - Long-press a button to repeat it in a given interval
    - [ ] Custom settings for separate keypads
    - [ ] Preset export as JSON
  
