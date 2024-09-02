const Contacts = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 text-center">Contacts</h1>

      <form>
        <input
          type="text"
          className="border-2 border-black p-2 m-2 rounded-xl"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-2 border-black  p-2 m-2 rounded-xl"
          placeholder="Message"
        />
        <button className="m-2 p-2 border border-black bg-orange-600 hover:bg-orange-300 text-white rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
