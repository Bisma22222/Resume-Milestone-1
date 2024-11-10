function toggleSkills() {
    let skills = document.getElementById('tech-skills');
    let summary = document.getElementById('tech-summary');
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
        summary.innerText = 'Hide Technical Skills';
    } else {
        skills.style.display = 'none';
        summary.innerText = 'Show Technical Skills';
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('tech-skills').style.display = 'none';
});