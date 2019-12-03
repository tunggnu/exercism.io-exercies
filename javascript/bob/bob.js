export const hey = (message) => {
  const trimmedMessage = message.trim();
  const isAsking = trimmedMessage.slice(-1) === '?';
  const isYelling =
    trimmedMessage.toUpperCase() === trimmedMessage && trimmedMessage.match(/[a-z]/i);
  const isAskingYelling = isAsking && isYelling;
  const isSilent = trimmedMessage === '';

  if (isAskingYelling) return "Calm down, I know what I'm doing!";
  if (isAsking) return 'Sure.';
  if (isYelling) return 'Whoa, chill out!';
  if (isSilent) return 'Fine. Be that way!';
  return 'Whatever.';
};
