‼️IMPLEMENTATION AND DEPLOYMENT‼️


# KisanKart - E-Commerce Platform

A modern e-commerce platform connecting farmers directly to consumers, built with **Spring Boot** backend and **React** frontend.

## 🌾 About KisanKart

KisanKart is an initiative to bridge the gap between farmers and consumers by providing a direct marketplace where:
- **Farmers** can list and sell their products directly
- **Consumers** can browse and purchase fresh produce
- **Admins** can manage the platform and user activities

## 🚀 Tech Stack

### Backend
- **Framework**: Spring Boot 3.4.3
- **Language**: Java 21
- **ORM**: Spring Data JPA with Hibernate
- **Database**: MySQL 8.0+
- **API**: RESTful APIs with CORS enabled
- **Build Tool**: Maven
- **Authentication**: Firebase Auth + Custom JWT

### Frontend
- **Library**: React 18.3.1
- **Router**: React Router v7.0.1
- **UI Framework**: Bootstrap 5.3.6 + React-Bootstrap
- **HTTP Client**: Axios
- **Authentication**: Firebase Authentication SDK
- **PDF Generation**: jsPDF
- **Authentication UI**: Google OAuth Integration

## 📁 Project Structure

### Root Directory
```
KisanKart/
├── backend/                 # Spring Boot application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/ecommerceapp/project/
│   │   │   │       ├── McaprojectApplication.java
│   │   │   │       └── KisanKart/
│   │   │   │           ├── models/           # JPA entities
│   │   │   │           ├── controller/       # REST endpoints
│   │   │   │           ├── repository/       # Data access layer
│   │   │   │           └── service/          # Business logic (placeholder)
│   │   │   └── resources/
│   │   │       └── application.properties    # Configuration
│   │   └── test/
│   ├── pom.xml
│   └── mvnw
├── frontend/                # React application
│   ├── src/
│   │   ├── pages/          # Route components
│   │   ├── components/     # Reusable UI components
│   │   ├── services/       # API communication
│   │   ├── config/         # External configs (Firebase)
│   │   ├── styles/         # Centralized CSS files
│   │   ├── App.js          # Main router
│   │   └── index.js        # Entry point
│   ├── public/             # Static assets
│   ├── package.json
│   └── README.md
└── README.md               # This file
```

### Frontend Organization

```
frontend/src/
├── pages/                   # Main page components
│   ├── HomePage.js
│   ├── Login.js
│   ├── CreateAccount.js
│   ├── ForgotPassword.js
│   ├── MarketPlace.js
│   ├── CartPage.js
│   ├── CheckOutPage.js
│   ├── InvoicePage.js
│   ├── MyOrderPage.js
│   ├── AboutUs.js
│   ├── HelpAndContact.js
│   ├── GiftCard.js
│   ├── GoogleAuth.js
│   ├── admin/              # Admin management pages
│   │   ├── AdminPage.js
│   │   ├── AddProduct.js
│   │   ├── AddProducts.js
│   │   └── ManageUser.js
│   └── categories/         # Product category pages
│       ├── Fruits.js
│       ├── Vegetables.js
│       ├── FoodGrains.js
│       ├── Nuts.js
│       ├── DairyProducts.js
│       └── Spices.js
├── components/             # Reusable UI components
│   └── GitBtn.js
├── services/               # API communication
│   └── productService.js
├── config/                 # External configurations
│   └── firebaseConfig.js
├── styles/                 # Centralized CSS files
│   ├── HomePage.css
│   ├── CartPage.css
│   ├── CheckOutPage.css
│   ├── CreateAccount.css
│   ├── InvoicePage.css
│   ├── MarketPlace.css
│   ├── MyOrderPage.css
│   ├── AddProduct.css
│   ├── AboutUs.css
│   ├── App.css
│   └── index.css
├── utils/                  # Utility functions (expandable)
├── hooks/                  # Custom React hooks (expandable)
├── App.js                  # Main router & state management
└── index.js                # Entry point
```

## 🔧 Installation & Setup

### Prerequisites
- **Java 21** or higher
- **Node.js 18+** and npm
- **MySQL 8.0+**
- **Git**

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Configure database** - Edit `src/main/resources/application.properties`
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/kisankart_db
   spring.datasource.username=root
   spring.datasource.password=root
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Build and run**
   ```bash
   # Development mode with hot reload
   ./mvnw spring-boot:run
   
   # Or build JAR
   ./mvnw clean package
   java -jar target/mcaproject-0.0.1-SNAPSHOT.jar
   ```

4. **Backend runs on**: `http://localhost:8080`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase** (if needed)
   - Update `src/config/firebaseConfig.js` with your Firebase credentials

4. **Start development server**
   ```bash
   npm start
   ```

5. **Frontend runs on**: `http://localhost:3000`

### Database Setup

1. **Create database**
   ```sql
   CREATE DATABASE kisankart_db;
   ```

2. **Tables are auto-created** via Hibernate when application starts
   - Main tables: `farmer_registration`, `consumer_registration`, `addProduct`

## 🌐 API Endpoints

### Authentication
- `POST /api/login` - User login (mobile number + password)
- `POST /api/signup` - User registration

### Products
- `GET /api/products/all` - Get all products
- `GET /api/products/{id}` - Get product by ID
- `POST /api/products/add` - Add new product (requires auth)
- `PUT /api/products/{id}` - Update product (requires auth)
- `DELETE /api/products/{id}` - Delete product (requires auth)

### Admin
- `GET /api/admin/stats` - Get dashboard statistics
- `GET /api/admin/users` - Get all users

### User Management
- `GET /api/users` - Get user profile
- `PUT /api/users/{id}` - Update user profile
- `POST /api/password-reset` - Password reset

## 🔑 Key Features

### For Consumers
✅ Browse products by category  
✅ Add products to cart  
✅ Checkout with payment methods  
✅ Order tracking  
✅ Invoice generation (PDF)  
✅ User profile management  
✅ Gift card purchases  

### For Farmers
✅ Product listing and management  
✅ Real-time inventory updates  
✅ Sales analytics  
✅ Order fulfillment tracking  

### For Admins
✅ User management  
✅ Product moderation  
✅ Sales dashboard  
✅ System statistics  

## 🔐 Authentication Flow

1. **Firebase Authentication** - Google OAuth for social login
2. **Custom Login** - Mobile number + password authentication
3. **JWT Tokens** - Custom token generation via `LoginController`
4. **Session Management** - localStorage for storing user sessions

## 📦 Dependencies

### Backend (pom.xml)
```xml
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-starter-security
- mysql-connector-java
- firebase-admin
```

### Frontend (package.json)
```json
- react@18.3.1
- react-router-dom@7.0.1
- axios
- firebase
- react-bootstrap@2.10.7
- bootstrap@5.3.6
- jpdf
- @react-oauth/google
```

## 🚀 Running the Application

### Option 1: Run Both Simultaneously (Recommended)
```bash
# Terminal 1 - Backend
cd backend
./mvnw spring-boot:run

# Terminal 2 - Frontend
cd frontend
npm start
```

### Option 2: Using Docker (if configured)
```bash
docker-compose up
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
./mvnw test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 📝 CORS Configuration

- Frontend origin: `http://localhost:3000`
- Backend server: `http://localhost:8080`
- CORS is configured in `CorsConfig.java`

**Note**: Update CORS settings in `application.properties` and `CorsConfig.java` for production environments.

## 🐛 Known Issues & Limitations

1. **No Service Layer** - Direct controller-to-repository pattern (should be refactored)
2. **Hardcoded Credentials** - Database credentials in properties file (use environment variables in production)
3. **Mixed Authentication** - Firebase auth exists alongside custom JWT (consolidate to one approach)
4. **ID Setter Bug** - `Product.java` setId() may have issues (verify in production)
5. **Localhost Only** - CORS and API endpoints hardcoded for localhost

## 🔄 Architecture Improvements Needed

- [ ] Add Service Layer for business logic
- [ ] Implement proper error handling
- [ ] Add request validation
- [ ] Create custom exceptions
- [ ] Add logging framework (SLF4J/Logback)
- [ ] Implement pagination for large datasets
- [ ] Add caching strategy (Redis)
- [ ] Setup CI/CD pipeline
- [ ] Add comprehensive test coverage
- [ ] Implement API documentation (Swagger/OpenAPI)

## 📚 Documentation

- See `FOLDER_STRUCTURE.md` for detailed frontend structure explanation
- See `ORGANIZATION_SUMMARY.md` for frontend reorganization summary
- See `.github/copilot-instructions.md` for AI agent guidelines

## 👥 Contributing

1. Create a feature branch: `git checkout -b feature/AmazingFeature`
2. Commit changes: `git commit -m 'Add AmazingFeature'`
3. Push to branch: `git push origin feature/AmazingFeature`
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💼 Author

**Shivendra Singh**  
GitHub: [@cvensingh](https://github.com/cvensingh)

## 🙏 Acknowledgments

- Spring Boot team for the excellent framework
- React team for the powerful UI library
- Firebase for authentication services
- Bootstrap for UI components

## 📞 Contact & Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Contact: rjshivendrasingh082@gmail.com

---

**Happy Farming! 🌾🚀**

*Last Updated: December 2, 2025*
