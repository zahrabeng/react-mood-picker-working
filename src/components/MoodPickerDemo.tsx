import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const changeMoodToHappy = () => {
    const nextMood = "happy";
    queueRerenderWithNewMoodValue(nextMood);
    console.log(
      "😀 queued a rerender with mood as",
      nextMood,
      "but in this render it is still",
      moodValueFromCurrentRender
    );
  };

  const changeMoodToConfused = () => {
    const nextMood = "confused";
    queueRerenderWithNewMoodValue(nextMood);
    console.log(
      "🤔 queued a rerender with mood as",
      nextMood,
      "but in this render it is still",
      moodValueFromCurrentRender
    );
  };

  const changeMoodToSad = () => {
    const nextMood = "sad";
    queueRerenderWithNewMoodValue(nextMood);
    console.log(
      "😢 queued a rerender with mood as",
      nextMood,
      "but in this render it is still",
      moodValueFromCurrentRender
    );
  };

  console.log(
    "Component is rendering with a mood value of",
    moodValueFromCurrentRender
  );

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender}</p>
      <button onClick={changeMoodToHappy}>😀</button>
      <button onClick={changeMoodToConfused}>🤔</button>
      <button onClick={changeMoodToSad}>😢</button>
    </>
  );
}

export default MoodPickerDemo;
