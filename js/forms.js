document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('lesson-form');
    const out = document.getElementById('submit-msg');
    const fnameInput = document.getElementById('fname');

    if (!form || !out) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fname = (fnameInput.value || '').trim();
        const lname = (form.lname?.value || '').trim();

        out.textContent = `Thanks, ${fname} ${lname}! Your lesson request has been received.`;
        out.style.color = '#111';

        alert("Thank you, " + (fname || 'student') + "! Your lesson request has been submitted.");

        setTimeout(() => {
            form.reset();
            out.textContent = '';
        }, 250);
    });
});



