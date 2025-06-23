/*export const Home = () => {
    return (
        <div
        className="min-h-screen  w-full bg-cover bg-center bg-no-repeat text-foreground overflow-x-hidden"
        style={{
            backgroundImage: 'url("/images/background.jpg")',
            backgroundColor: 'black',
        }}
        >
        <h1 className="text-4xl p-8">Hello</h1>
        </div>
    );
};*/

import background from './assets/background.jpg'; // ✅ processed by Vite
console.log("Background path:", background);

export const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 style={{ color: 'white', padding: '2rem' }}>Image as background!</h1>
    </div>
  );
};