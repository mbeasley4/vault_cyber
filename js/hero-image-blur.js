(function (Drupal) {
  Drupal.behaviors.heroImageBlur = {
    attach(context) {
      const wrappers = context.querySelectorAll(
        '.lazy-image:not(.is-loaded)'
      );

      wrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        if (!img) return;

        if (img.complete) {
          wrapper.classList.add('is-loaded');
        } else {
          img.addEventListener(
            'load',
            () => {
              wrapper.classList.add('is-loaded');
            },
            { once: true }
          );
        }
      });
    }
  };
})(Drupal);
