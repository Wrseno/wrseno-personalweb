import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

interface SocialDetail {
  name: any;
  url: string;
}

interface SocialProps {
  social: SocialDetail;
}

const Social = (props: SocialProps) => {

    const {social} = props;

  return (
    <div>
        <li className='mb-4 block lg:mb-6'>
          <button onClick={()=> window.open(social.url, "_blank")}>
                    <FontAwesomeIcon
          icon={["fab", social.name]}
          className="w-8 h-8 lg:w-10 lg:h-10 hover:text-primary text-slate-800 hover:ease-linear hover:duration-300"
        />
          </button>
        </li>
    </div>
  )
}

export default Social

