# Style Guide and Code Organization

## Project Structure

```
site1101-portfolio/
├── index.html                 # Home page
├── about.html                 # About page
├── projects.html              # Projects showcase page
├── css/
│   ├── styles.css            # Main responsive stylesheet
│   └── accessibility.css      # Accessibility features
├── js/
│   └── main.js               # JavaScript functionality
├── assets/
│   └── img/                  # Project images and assets
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
├── README.md                 # Project documentation
├── STYLE_GUIDE.md           # This file
└── .gitignore               # Git ignore rules
```

## Code Organization

### HTML Structure
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Descriptive class and id names
- Proper heading hierarchy (h1, h2, h3)
- Meta tags for SEO and viewport configuration
- Accessibility attributes

### CSS Organization
- **styles.css**: Main stylesheet with responsive design
- **accessibility.css**: Keyboard navigation and accessibility improvements
- Mobile-first approach with media queries
- Consistent naming conventions using BEM-like syntax
- Color variables defined in gradient themes
- Organized sections with clear comments

### JavaScript Organization
- Modular functions with single responsibilities
- Clear naming conventions
- DOM manipulation using modern methods
- Event listeners for interactivity
- Intersection Observer for scroll animations

## Naming Conventions

### CSS Classes
- Use kebab-case for multi-word classes
- Examples: `project-card`, `social-links`, `skill-tag`
- Prefix utility classes with their purpose: `.sr-only`, `.active`

### JavaScript Functions
- Use camelCase for function names
- Examples: `setActiveNav()`, `observeProjectCards()`, `toggleMobileMenu()`
- Use descriptive names that explain the function's purpose

### HTML IDs
- Use camelCase or kebab-case consistently
- Examples: `main-content`, `projectGallery`
- Use for important anchor points and form elements

## Color Palette

- **Primary Gradient**: #667eea (Purple) → #764ba2 (Dark Purple)
- **Secondary Gradient**: #f093fb (Pink) → #f5576c (Red)
- **Accent Colors**: #3498db (Blue), #4facfe → #00f2fe (Cyan)
- **Text**: #333 (Dark Gray), #555 (Medium Gray)
- **Background**: #f4f4f4 (Light Gray)
- **Cards**: #fff (White)

## Typography

- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Line Height**: 1.6 (for readability)
- **Main Heading (h1)**: 3.5rem (desktop), 2.5rem (tablet), 1.8rem (mobile)
- **Section Heading (h2)**: 2.5rem (desktop), 2rem (tablet), 1.5rem (mobile)
- **Subsection Heading (h3)**: 1.3rem
- **Body Text**: 1rem

## Responsive Design Breakpoints

- **Mobile**: max-width 480px (phones)
- **Extra Small**: max-width 320px (small phones)
- **Tablet**: min-width 768px (tablets and up)
- **Desktop**: min-width 1024px (large screens)

## Spacing System

- Use consistent padding and margins
- Standard unit: 1rem = 16px
- Spacing values: 0.5rem, 1rem, 1.5rem, 2rem, 3rem

## Components

### Navigation Bar
- Sticky positioning at top
- Horizontal layout with flexbox
- Active state highlighting
- Responsive font sizes

### Project Cards
- Grid layout (responsive columns)
- Hover effects with transform and shadow
- Card content with clear typography
- Image aspect ratio: 400x250px

### Social Links
- Circular button design
- Icon centered with flexbox
- Hover animation with color change and scale
- Font Awesome icons

### Footer
- Dark background matching navbar
- Centered text layout
- Link styling with color transition
- Copyright information

## Best Practices Applied

1. **Semantic HTML** - Proper use of HTML5 semantic elements
2. **Mobile-First Design** - Base styles for mobile, enhanced for larger screens
3. **Accessibility** - ARIA labels, keyboard navigation, sufficient color contrast
4. **Performance** - Optimized CSS, minimal JavaScript, efficient selectors
5. **Maintainability** - Clear code structure, consistent naming, helpful comments
6. **Scalability** - Modular approach allows easy additions and modifications
7. **Cross-browser Compatibility** - Standard CSS properties, vendor prefixes where needed

## Animation Guidelines

- Use CSS transitions for smooth interactions (0.3s - 0.8s duration)
- Intersection Observer for scroll-based animations
- Easing functions: ease, ease-out (natural motion)
- Avoid excessive animations to maintain performance

## File Size Guidelines

- HTML files: Keep under 50KB per page
- CSS: Single stylesheet (currently ~400KB)
- JavaScript: Minimal, under 10KB
- Images: Optimize for web, preferably SVG or compressed formats

## Future Enhancements

- Add dark mode stylesheet
- Implement lazy loading for images
- Add service worker for offline support
- Implement form validation and submission
- Add blog or articles section
- Integrate with CMS
- Add analytics tracking

## Version Control

- Atomic commits for specific features
- Clear commit messages describing changes
- Branch naming: feature/*, bugfix/*, etc.
- Pull request reviews before merging

---

Last Updated: December 2025
