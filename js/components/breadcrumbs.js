export const Breadcrumbs = (items) => {
  return `
        <nav class="breadcrumbs container" aria-label="Breadcrumb">
            <ol class="breadcrumb-list">
                <li class="breadcrumb-item">
                    <a href="#/" data-link>Home</a>
                </li>
                ${items
                  .map(
                    (item, index) => `
                    <li class="breadcrumb-item ${index === items.length - 1 ? "active" : ""}">
                        <span class="breadcrumb-separator">/</span>
                        ${item.path ? `<a href="${item.path}" data-link>${item.label}</a>` : `<span>${item.label}</span>`}
                    </li>
                `,
                  )
                  .join("")}
            </ol>
        </nav>
    `;
};
