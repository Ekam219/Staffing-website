import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Footer from "../../Footer/Footer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import './AdminDashboard.scss'; // Import the SCSS file
import NavBar from "../../Navbar/NavBar";
import RecruiterDash from "../../recruiter/jobposting/RecruiterDashboard";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice Johnson", role: "Recruiter" },
    { id: 2, name: "Bob Smith", role: "Interviewer" },
    { id: 3, name: "Charlie Brown", role: "HR Manager" },
    // More user entries can be added here
  ]);

  const [tasks] = useState([
    { id: 1, description: "Review applications", status: "Pending" },
    { id: 2, description: "Schedule interviews", status: "In Progress" },
    { id: 3, description: "Send job offers", status: "Completed" },
    // More task entries can be added here
  ]);

  const [notifications] = useState([
    { id: 1, message: "New application received." },
    { id: 2, message: "Interview scheduled for John Doe." },
    { id: 3, message: "Job offer accepted by Jane Smith." },
    // More notification entries can be added here
  ]);

  const stats = [
    { title: "Total Applicants", count: 120 },
    { title: "Selected for Interview", count: 50 },
    { title: "Offered Jobs", count: 20 },
    { title: "Hired", count: 10 },
  ];

  const chartData = {
    labels: stats.map((item) => item.title),
    datasets: [
      {
        label: "count",
        data: stats.map((item) => item.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Recruitment Stats",
      },
    },
  };

  // Function to handle user role update
  const updateUserRole = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );
  };

  // Function to delete a user
  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <NavBar/>
    <div className="dashboard">
      <h1 className="title">Admin Dashboard</h1>

      <div className="cards-container">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <h3>{stat.title}</h3>
            <p>{stat.count}</p>
          </div>
        ))}
      </div>

      <div className="chart-container">
      <div className="chart">
          <Bar data={chartData} options={chartOptions} />
        </div>
        <div className="chart">
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="chart">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="user-list">
        <h2>User Management</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="table-cell">Name</th>
              <th className="table-cell">Role</th>
              <th className="table-cell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="table-cell">{user.name}</td>
                <td className="table-cell">{user.role}</td>
                <td className="table-cell">
                  <button onClick={() => updateUserRole(user.id, "Admin")}>
                    Make Admin
                  </button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="task-list">
        <h2>Task Management</h2>
        <table className="table">
          <thead>
            <tr>
              <th className="table-cell">Task</th>
              <th className="table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="table-cell">{task.description}</td>
                <td className="table-cell">{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="notifications">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification) => (
            <li key={notification.id}>{notification.message}</li>
          ))}
        </ul>
      </div>
      <RecruiterDash/>
    </div>
    <Footer/>
    </div>
  );
}

export default AdminDashboard;
