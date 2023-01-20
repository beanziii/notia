import { Form } from 'react-router-dom';

function CreateNoteForm() {
  return (
    <Form method="post" className="flex flex-col gap-3">
      <input
        type="text"
        id="title"
        name="title"
        className="px-4 py-2 border border-gray-200"
      />

      <textarea
        type="text"
        id="content"
        name="content"
        className="p-4 border border-gray-200"
        rows="20"
      />

      <button
        text="Create note"
        type="submit"
        className="bg-gray-900 text-white w-32 px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </Form>
  );
}
export default CreateNoteForm;
