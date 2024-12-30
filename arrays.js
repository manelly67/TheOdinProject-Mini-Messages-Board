const links = [
    { href: "/", text: "All Messages" },
    { href: "new", text: "New Message" },
];

// REMOVER ESTE ARRAY AL FINALIZAR LAS MODIFICACIONES
const messages = [
   {
      text: "Hi there!",
      user: "Armando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

module.exports = {
    links,
    messages
}