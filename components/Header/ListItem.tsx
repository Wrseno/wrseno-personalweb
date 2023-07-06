import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

interface ListItemProps {
  path: string;
  title: string;
}

const ListItem = (props: ListItemProps) => {
  const {path, title} = props;
  const {asPath} = useRouter();

  return (
    <li className='group'>
      <Link href={`${path}`}>
        <span
          className={`${
            asPath === `${path}`
              ? "font-bold"
              : "dark:text-slate-400 text-slate-600"
          } text-base text-dark py-2 mx-8 lg:mx-4 group-hover:text-black dark:group-hover:text-white group-hover:ease-in-out group-hover:duration-300 flex lg:text-lg lg:font-semibold`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default ListItem;
