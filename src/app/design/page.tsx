export default function Design() {
  return (
    <div className="flex flex-col space-y-2 pb-52 p-4">
      <div className="flex flex-wrap gap-4 align-center justify-center">
        <div className="w-32 h-32 bg-primary rounded-lg shadow-md flex justify-center items-center">
          <p className="text-black">Primary </p>
        </div>
        <div className="w-32 h-32 bg-secondary rounded-lg shadow-md flex justify-center items-center">
          <p className="text-black">Secondary</p>
        </div>
        <div className="w-32 h-32 bg-accent rounded-lg shadow-md flex justify-center items-center">
          <p className="text-black">Accent</p>
        </div>
        <div className="w-32 h-32 bg-(--success) rounded-lg shadow-md flex justify-center items-center">
          <p className="text-black">Success</p>
        </div>
        <div className="w-32 h-32 bg-(--error) rounded-lg shadow-md flex justify-center items-center">
          <p className="text-black">Error</p>
        </div>
        <div className="w-32 h-32 bg-(--warning) rounded-lg shadow-md flex justify-center items-center">
          <p className="text-black">Warning</p>
        </div>
      </div>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>Paragraph</p>
      <a>Link</a>
      <button className="btn btn-primary w-64">Primary button</button>
      <button className="btn btn-secondary w-64">Secondary button</button>
      <button className="btn btn-ghost w-64">Ghost button</button>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Textarea" />
        <label htmlFor="options">Options</label>
        <select id="options">
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </form>
    </div>
  );
}
