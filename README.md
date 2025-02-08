# T022_Winsoft: Military Base Infiltration Detection

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/travis/Vaishnavi06Desai/T022_Winsoft/master.svg)](https://travis-ci.org/github/T022_Winsoft)

<img width="1511" alt="image" src="https://github.com/user-attachments/assets/30269d6d-2292-4651-869d-01d535efad6c" />
<img width="1511" alt="image" src="https://github.com/user-attachments/assets/8ddeb8ba-3dc1-4641-8b2d-87728e0a5b9d" />
<img width="1511" alt="image" src="https://github.com/user-attachments/assets/7a6a13ba-d318-437a-9898-44f2f103b18d" />
<img width="1511" alt="image" src="https://github.com/user-attachments/assets/38724d9a-b174-442a-865d-6fc3ba88f8d8" />


## 📜 Overview

**T022_Winsoft** is a project developed during a hackathon for a military base, designed to enhance the detection of infiltration within the base by analyzing encrypted messages. The application securely decrypts the messages to identify potentially compromised locations, then visualizes these infiltrations on a map, providing critical situational awareness for the military.

The project uses **Angular** for the frontend, **Express.js** for the backend, and incorporates custom encryption and decryption logic to handle sensitive information securely. One of the most complex parts of this system is the decryption algorithm that not only decodes the message but also analyzes a graph of base locations to find the shortest path, representing the most probable infiltration route.

## 🛠️ Technologies Used

- **Frontend**: Angular
- **Backend**: Express.js
- **Authentication**: JWT (JSON Web Token) for secure login
- **Decryption Algorithm**: Custom encryption and decryption logic
- **Database**: MongoDB (or similar database for storing locations and encrypted messages)

## 🚀 Key Features

- **Custom Authentication**: Secure login implemented using JWT, without relying on third-party services.
- **Decryption Logic**: A custom algorithm that decrypts encrypted messages and identifies infiltrated locations within a network of military bases.
- **Shortest Path Calculation**: Using graph theory, the system finds the shortest path between the infiltrated locations, assisting military personnel in quickly responding to threats.
- **Map Visualization**: Displays the decrypted infiltrated locations on a map, providing a clear, actionable overview.

## ⚙️ Decryption Logic & Graph-Based Analysis

The core functionality of the **T022_Winsoft** application revolves around decrypting messages and analyzing the network of military bases for infiltrated locations. The decryption logic is specifically designed to handle encrypted strings in a way that reveals both the hidden message and the locations where an infiltration has likely occurred.

### Decryption Mechanism

The decryption algorithm works by treating the encrypted message as a matrix of characters that is rearranged based on a given key. The key determines the order in which the columns of the matrix are decrypted. This results in the original message being reconstructed, while also identifying key locations embedded within the message.

1. **Matrix Construction**: The message is split into rows and columns based on the length of the decryption key. Each character from the encrypted message is placed into the matrix according to the key's ordering.
   
2. **Column Reordering**: The key is used to determine the order of the columns in the matrix. After sorting the key alphabetically, the characters in each column are rearranged to reconstruct the message.

3. **Message Extraction**: Once the matrix is reconstructed, the original message is obtained by reading the characters in the proper order. The decrypted message may contain locations that are critical for identifying compromised areas.

### Graph Analysis & Shortest Path Calculation

In addition to decrypting the message, the system analyzes the decrypted string to extract military base locations. These locations are then evaluated within a graph of connected bases, and the algorithm calculates the shortest path from the compromised base(s) to other points of interest.

1. **Graph Representation**: The military base locations are represented as nodes in a graph. The edges between the nodes denote possible paths between these locations. Each edge has a weight (in the form of a distance or travel time) that indicates how far apart the nodes are.

2. **Shortest Path Algorithm**: The system uses **Dijkstra’s algorithm** to compute the shortest path between the compromised bases and other key locations. This algorithm finds the path with the least number of hops (or the shortest distance) between nodes, providing a quick and efficient way to visualize the most vulnerable paths.

3. **Location Detection**: The system identifies the infiltrated locations from the decrypted message, then analyzes the graph to find which base is most likely compromised based on proximity to other critical locations. The algorithm helps prioritize response efforts by identifying the shortest and most direct path to the compromised base.

### Practical Use Case

- **Military Operations**: During a security breach or infiltration attempt, the encrypted messages received contain vital intelligence. These messages are decrypted, and the infiltrated locations are identified. The system then determines the shortest path between bases, helping military personnel make swift, data-driven decisions about where to deploy resources for a response.
  
- **Location Analysis**: By processing the decrypted message and analyzing the network of bases, the system ensures that military operations can be optimized. Instead of relying on manual processes or incomplete data, the app provides an automated, highly accurate map of potential infiltration routes.

## 🔧 Installation and Setup

To run this project locally, follow these installation steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Vaishnavi06Desai/T022_Winsoft.git
    ```

2. **Install Dependencies**:
   - **Frontend**:
     ```bash
     cd frontend
     npm install
     ```

   - **Backend**:
     ```bash
     cd backend
     npm install
     ```

3. **Run the Application**:
   - Start the Angular frontend:
     ```bash
     cd frontend
     ng serve
     ```

   - Start the Express.js backend:
     ```bash
     cd backend
     npm start
     ```

4. **Access the Application**: Open your browser and visit [http://localhost:4200](http://localhost:4200) for the frontend and [http://localhost:3000](http://localhost:3000) for the backend API.

## 🧑‍💻 Contributing

We welcome contributions! If you’d like to contribute:

1. **Fork** the repository.
2. **Create a new branch**: `git checkout -b feature/your-feature`
3. **Commit your changes**: `git commit -am 'Add new feature'`
4. **Push to your branch**: `git push origin feature/your-feature`
5. **Create a Pull Request**.

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for more details.

---

## ✨ Stay secure and innovate! ✨
