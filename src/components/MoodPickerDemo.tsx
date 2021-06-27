function MoodPickerDemo(): JSX.Element {
  let mood = 'confused';

  const changeMoodToHappy = () => {
    mood = 'happy';
    console.log("😀 the value of mood is now", mood);
  };

  const changeMoodToConfused = () => {
    mood = "confused";
    console.log("🤔 the value of mood is now", mood);
  };

  const changeMoodToSad = () => {
    mood = "sad";
    console.log("😢 the value of mood is now", mood);
  };

  console.log("Component is rendering with a mood value of", mood);

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Current value: {mood}</p>
      <button onClick={changeMoodToHappy}>😀</button>
      <button onClick={changeMoodToConfused}>🤔</button>
      <button onClick={changeMoodToSad}>😢</button>
    </>
  );
}

export default MoodPickerDemo;
