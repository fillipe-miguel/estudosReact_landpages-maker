export default function mapLinks(dataLinks) {
  if (dataLinks) {
    return dataLinks.map((link) => ({
      children: link.link_text,
      link: link.url,
      newTab: link.open_in_new_tab,
    }));
  }

  return [
    {
      children: '',
      link: '',
      newTab: false,
    },
  ];
}
