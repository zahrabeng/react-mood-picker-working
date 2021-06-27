import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    const nextMood = "happy";
    queueRerenderWithNewMoodValue(nextMood);
    console.log(
      "😀 queued a rerender with mood as",
      nextMood,
      "but in this render it is still",
      moodValueFromCurrentRender
    );
  };

  const handleMoodChangeToConfused = () => {
    const nextMood = "confused";
    queueRerenderWithNewMoodValue(nextMood);
    console.log(
      "🤔 queued a rerender with mood as",
      nextMood,
      "but in this render it is still",
      moodValueFromCurrentRender
    );
  };

  const handleMoodChangeToSad = () => {
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
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
    </>
  );
}

export default MoodPickerDemo;
