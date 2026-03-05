# 🚀 Abdurehman Kero - Full Stack Developer Portfolio


Welcome to my personal portfolio website! This is a modern, full-stack web application built to showcase my projects, skills, and professional journey as a Full Stack Developer.

🔗 **Live Demo:** [https://abdurehman.com](https://abdurehman.com)

---

## ✨ Features

### 📱 **Frontend**
- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Interactive UI** - Smooth animations with Framer Motion
- **Dynamic Typewriter Effect** - Engaging hero section with rotating roles
- **Custom Animated Elements** - Waving hand animation, gradient effects
- **Project Gallery** - Grid layout showcasing all projects with hover effects
- **Testimonials Section** - Client feedback with star ratings
- **Contact Form** - Direct email functionality with validation

### ⚙️ **Backend**
- **RESTful API** - Built with Node.js and Express
- **MySQL Database** - Structured data storage for all dynamic content
- **Email Integration** - Nodemailer for contact form submissions
- **Admin Authentication** - Secure login for content management

### 🛠️ **Admin Dashboard**
- **Projects Management** - Add, edit, delete portfolio projects
- **Testimonials Management** - Manage client reviews dynamically
- **Experience Management** - Update work history in real-time
- **Banner Image Control** - Change profile image anytime
- **Secure Access** - Password-protected admin routes

### 🎨 **UI/UX Highlights**
- **Gradient Themes** - Custom purple and pink gradients throughout
- **Dark Mode Design** - Easy on the eyes with modern aesthetics
- **Smooth Transitions** - Fluid page transitions and hover effects
- **Interactive Cards** - Project cards with live demo links
- **Timeline Layout** - Clean experience and education timeline

---

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - UI library with hooks and functional components
- **React Router DOM** - Navigation and routing
- **Tailwind CSS** - Utility-first styling framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Icon library
- **React Simple Typewriter** - Typewriter effect in hero section

### **Backend**
- **Node.js** - JavaScript runtime
- **Express** - Web framework for REST APIs
- **MySQL** - Relational database
- **Nodemailer** - Email functionality
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

### **Admin Features**
- **Custom Admin Panel** - Full CRUD operations
- **Secure Authentication** - Protected routes
- **Dynamic Content Management** - No code changes needed

---

## 📂 Project Structure

```
my-portfolio/
├── public/                  # Static assets
│   ├── index.html           # Main HTML file
│   ├── og-image.jpg         # Social media preview
│   └── favicon.ico          # Site icon
├── src/
│   ├── assets/              # Images and static resources
│   ├── components/          # React components
│   │   ├── banner/          # Hero section
│   │   ├── projects/        # Projects display
│   │   ├── testimonials/    # Testimonials section
│   │   ├── contact/         # Contact form
│   │   ├── resume/          # Education & Experience
│   │   ├── AdminDashboard.jsx   # Projects admin
│   │   ├── AdminTestimonials.jsx # Testimonials admin
│   │   ├── AdminExperience.jsx   # Experience admin
│   │   ├── AdminBanner.jsx       # Banner admin
│   │   └── AdminMain.jsx         # Main admin dashboard
│   ├── layouts/             # Layout components
│   ├── constants/           # Constant data
│   ├── App.js               # Main app component
│   └── index.js             # Entry point
├── Server/                  # Backend server
│   ├── config/              # Database configuration
│   ├── routes/              # API routes
│   │   ├── contactRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── testimonialRoutes.js
│   │   ├── experienceRoutes.js
│   │   ├── bannerRoutes.js
│   │   └── adminRoutes.js
│   ├── .env                 # Environment variables
│   └── server.js            # Main server file
├── .htaccess                # Apache configuration (for cPanel)
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Abdurehman-Kero/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Create .env file
echo "REACT_APP_API_URL=https://your-backend-url.com" > .env

# Start development server
npm start
```

### Backend Setup

```bash
cd Server

# Install dependencies
npm install

# Create .env file
cat > .env << EOF
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=portfolio_db
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
ADMIN_USER=admin
ADMIN_PASS=your_secure_password
EOF

# Start server
npm start
```

### Database Setup

```sql
-- Run this SQL in phpMyAdmin or MySQL CLI
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Projects table
CREATE TABLE projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    technologies VARCHAR(300),
    github_url VARCHAR(255),
    live_url VARCHAR(255),
    image_url VARCHAR(255),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    testimonial TEXT NOT NULL,
    image VARCHAR(500),
    rating INT DEFAULT 5,
    featured BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experiences table
CREATE TABLE experiences (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year VARCHAR(10) NOT NULL,
    quarter VARCHAR(10),
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    description TEXT NOT NULL,
    technologies VARCHAR(500),
    achievements TEXT,
    companyLogo VARCHAR(500),
    currentPosition BOOLEAN DEFAULT false,
    displayOrder INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Banner images table
CREATE TABLE banner_images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contacts table
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(200),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🚀 Deployment

### Frontend Deployment (cPanel)

```bash
# Build the project
npm run build

# Upload the contents of the 'build' folder to public_html
# Add .htaccess file for routing
```

**.htaccess file content:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### Backend Deployment

- Upload Server folder to your hosting
- Set up Node.js application in cPanel
- Configure environment variables
- Ensure MySQL database is accessible

---

## 📸 Screenshots

| Homepage | Projects Section |
|----------|------------------|
| ![Home](link-to-screenshot) | ![Projects](link-to-screenshot) |

| Admin Dashboard | Mobile View |
|-----------------|-------------|
| ![Admin](link-to-screenshot) | ![Mobile](link-to-screenshot) |

---

## 🔑 Key Features Explained

### **Admin Dashboard**
The admin panel allows complete content management without touching code:
- **/admin** - Main dashboard with navigation to all management sections
- **/admin/projects** - Add/edit/delete projects with image URLs
- **/admin/testimonials** - Manage client testimonials
- **/admin/experience** - Update work history
- **/admin/banner** - Change profile image anytime

### **Contact Form**
- Validates user input
- Saves messages to database
- Sends email notifications
- Prevents spam with validation

### **Dynamic Content**
All content is fetched from the database:
- Projects load dynamically
- Testimonials update in real-time
- Experience section auto-updates
- Banner image can be changed anytime

---

## 🧪 Testing

```bash
# Run frontend tests
npm test

# Check responsive design
# Open Chrome DevTools and use device toolbar

# Test API endpoints
curl https://porfoliobe.abdurehman.com/api/projects
curl https://porfoliobe.abdurehman.com/api/testimonials
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

Abdurehman Kero - [keroabdurehman@gmail.com](mailto:keroabdurehman@gmail.com)

LinkedIn: [https://linkedin.com/in/abdukr](https://linkedin.com/in/abdukr)
GitHub: [https://github.com/Abdurehman-Kero](https://github.com/Abdurehman-Kero)
Portfolio: [https://abdurehman.com](https://abdurehman.com)

---

## 🙏 Acknowledgments

- **Future Interns** - For the opportunity and guidance
- **Evangadi Tech** - For the MERN stack training
- **Unsplash** - For placeholder images
- **React Community** - For amazing tools and libraries

---

**⭐️ If you found this project helpful, please give it a star on GitHub!**

---

*This README was generated with ❤️ by Abdurehman Kero*
