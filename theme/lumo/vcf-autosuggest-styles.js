const theme = document.createElement('dom-module');
theme.id = 'vcf-autosuggest-lumo';
theme.setAttribute('theme-for', 'vcf-autosuggest');
theme.innerHTML = `
    <template>
      <style>
        :host {}
      </style>
    </template>
  `;
theme.register(theme.id);
