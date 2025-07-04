document.addEventListener('DOMContentLoaded', function () {
  const themeColors = [
    { theme: 'light',  variable: '--light',  fallback: '#f9f8f4', class: 'light' },
    { theme: 'dark',   variable: '--dark',   fallback: '#151515', class: 'dark' },
    { theme: 'accent', variable: '--accent', fallback: '#897866', class: 'accent' },
    {
      theme: 'body',
      variable: '--body-background',
      fallback: '#ffffff',
      class: 'body',
      type: 'background'
    },
    {
      theme: 'body',
      variable: '--body-font-color',
      fallback: '#242424',
      class: 'body',
      type: 'font'
    }
  ];

  themeColors.forEach(({ theme, variable, fallback, class: className, type }) => {
    let el =
      document.querySelector(`[data-section-theme="${theme}"]`) ||
      document.querySelector(`.${className}`);

    let prop = type === 'font' ? '--siteFontColor' : '--siteBackgroundColor';

    let color = el ? getComputedStyle(el).getPropertyValue(prop).trim() : '';
    document.documentElement.style.setProperty(variable, color || fallback);
  });
});
