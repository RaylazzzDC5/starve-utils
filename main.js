(function() {
    'use strict';

    alert("YE")

    window.addEventListener("load", () => {
        const stats = new Stats();
        alert(stats !== undefined); // Cela devrait maintenant marcher
    });
})();
