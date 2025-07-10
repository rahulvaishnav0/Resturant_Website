const Contact = () => (
  <div className="p-6 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" className="border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="border p-2 rounded" />
      <textarea placeholder="Your Message" className="border p-2 rounded h-32" />
      <button className="bg-green-600 text-white py-2 rounded">Send</button>
    </form>
  </div>
);

export default Contact;



