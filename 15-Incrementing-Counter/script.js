const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        // increment variable does 2 things:
        // 1. Controls the speed of increment
        // 2. Makes sure the increment ends at the same time regardless of th target value
        const increment = target / 2000;

        if (c < target) {
            counter.innerText = `${Math.ceil(c+increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    }

    updateCounter();
})