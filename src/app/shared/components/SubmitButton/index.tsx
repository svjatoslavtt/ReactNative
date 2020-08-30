import React from 'react';
import {
  Text,
  TouchableNativeFeedbackProps,
  TouchableOpacity,
} from 'react-native';

import {styles} from './style';

interface SubmitButtonOwnProps {
  text: string;
  type?: string;
}

type SubmitButtonProps = SubmitButtonOwnProps & TouchableNativeFeedbackProps;

const SubmitButton: React.FC<SubmitButtonProps> = ({onPress, text, type}) => {
  const buttonClasses = [styles.button, type === 'delete' && styles.deleteButton];
  const textClasses = [styles.text, type === 'delete' && styles.deleteText];
  return (
    <TouchableOpacity style={buttonClasses} onPress={onPress}>
      <Text style={textClasses}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
