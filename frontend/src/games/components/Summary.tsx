
function Modal({ game, hideModal }) {

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-xl font-bold">Game Summary</h1>
        <p className="mt-2">Final Score: {game.points}</p>
        <p className="mt-2">Lives: {game.lives}</p>
        <button onClick={hideModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;