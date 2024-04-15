import {
  FaGithub,
  FaLinkedin,
  FaBehanceSquare,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialProfile = () => {
  return (
    <div className='flex items-center space-x-3'>
      <a href='https://github.com/colmenareshr' target='_blank'>
        <FaGithub size={30} />
      </a>
      <a href='https://linkedin.com/in/humbertocolmenares/' target='_blank'>
        <FaLinkedin size={30} />
      </a>
      <a href='http://behance.net/colmenareshr' target='_blank'>
        <FaBehanceSquare size={30} />
      </a>
      <a href='http://instagram.com/humbertocolmenares' target='_blank'>
        <FaInstagram size={30} />
      </a>
      <a href='https://twitter.com/colmenareshr' target='_blank'>
        <FaXTwitter size={30} />
      </a>
    </div>
  );
};

export default SocialProfile;
