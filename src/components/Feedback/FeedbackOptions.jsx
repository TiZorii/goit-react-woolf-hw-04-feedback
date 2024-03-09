import PropTypes from 'prop-types';
import { List } from './Feedback.styled';
import FeedbackButton from './FeedbackButton';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <List>
        {options.map((option) => (
          <FeedbackButton
            key={option}
            onClick={() => onLeaveFeedback(option)}
            value={option.charAt(0).toUpperCase() + option.slice(1)}
          />
        ))}
      </List>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
