import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const languages = [
  {
    key: "en",
    name: "En",
  },
  {
    key: "ru",
    name: "Ru",
  },
  {
    key: "ro",
    name: "Ro",
  },
];

function Languages() {
  const locale = useLocation();

  const { i18n } = useTranslation();

  return (
    <div className="flex justify-around w-16">
      {languages.map((item) => (
        <button
          key={item.key}
          className={classNames(
            i18n.language === item.key && "hidden",
            "text-lg font-thin text-slate-300 text-opacity-50 hover:text-yellow-300"
          )}
          onClick={() => i18n.changeLanguage(item.key)}
        >
          <Link
            to={`/${item.key}/${locale.pathname
              .split("/")
              .splice(2)
              .join("/")}`}
          >
            {item.name}
          </Link>
        </button>
      ))}
    </div>
  );
}

export default Languages;
