const ListPage = () => {
  const myArray = [
    {
      title: "Rights Reserved",
      description:
        "All exploitation rights of this website are reserved. The website’s contents, including texts, designs, images, databases, logos, structure, brands, and other elements, are protected by intellectual property laws and international treaties.",
    },
    {
      title: "Prohibited Uses",
      description:
        "Unauthorized reproduction, transmission, adaptation, translation, modification, public communication, or any other exploitation of the website’s content, in any form or by any means, is strictly prohibited without prior written consent from Wedding & Beyond or respective owners. Violation of these rights may result in civil or criminal legal action.",
    },
    {
      title: "No Licensing",
      description:
        "Wedding & Beyond does not provide any license or authorization for the use of its intellectual property, or any other property or rights related to the Website, its services, or contents.",
    },
    {
      title: "User Authorization",
      description:
        "Users grant Wedding & Beyond permission to use their logos, trademarks, and content provided to the Website for free, for the provision of contracted services and for promotion on the website and social networks, always citing the source.",
    },
    {
      title: "User Responsibility",
      description:
        "Users assure that content provided to Wedding & Beyond does not infringe on any industrial or intellectual property rights, or any other third-party rights. Users will be responsible for any claims related to such infringements.",
    },
    {
      title: "Claims of Infringement",
      description:
        "To protect intellectual property rights, users or third parties should promptly report any suspected infringements occurring on the website by contacting Wedding & Beyond at their physical address or via email. The notification should include personal identification of the rights holder, location of the protected content on the website, evidence of the intellectual property rights, and a statement confirming the accuracy of the information in the notification.",
    },
  ];
  const data = ({ title, description }: any) => {
    return (
      <section className="data">
        <p>{title}</p>
        <p>{description}</p>
      </section>
    );
  };

  return (
    <section>
      <h1> TERMS AND CONDITIONS </h1>
      {myArray.map(data)}
    </section>
  );
};
export default ListPage;
