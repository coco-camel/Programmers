function solution(participant, completion) {
  const participantCount = {};

  for (let i = 0; i < participant.length; i++) {
    const name = participant[i];
    if (participantCount[name]) {
      participantCount[name]++;
    } else {
      participantCount[name] = 1;
    }
  }

  for (let i = 0; i < completion.length; i++) {
    const name = completion[i];
    if (participantCount[name]) {
      participantCount[name]--;
    }
  }

  for (const name in participantCount) {
    if (participantCount[name] === 1) {
      return name;
    }
  }

  return null;
}