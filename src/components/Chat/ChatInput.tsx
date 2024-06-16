import React, { FC } from 'react';

interface ChatInputProps {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  messageValue: string;
  setMessageValue: (e: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSendMessage: () => void;
}

export const ChatInput: FC<ChatInputProps> = ({
  textAreaRef,
  messageValue,
  setMessageValue,
  handleKeyDown,
  onSendMessage,
}) => {
  return (
    <form>
          <textarea
            ref={textAreaRef}
            value={messageValue}
            onKeyDown={handleKeyDown}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessageValue(e.target.value)}
            className="form-control"
            rows={3}></textarea>
      <button
        type="button"
        disabled={!messageValue.trim()}
        onClick={onSendMessage}
        className="btn btn-primary">
        Отправить
      </button>
    </form>
  );
};