// Toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Simulate navigation by showing/hiding content sections
function navigateTo(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.about-container');
    sections.forEach(sec => (sec.style.display = 'none'));

    // Show the selected section
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Update active state in navbar tabs
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    const activeTab = Array.from(tabs).find(tab => tab.getAttribute('onclick').includes(section));
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Default to showing the About section
window.onload = function () {
    navigateTo('about');
};
