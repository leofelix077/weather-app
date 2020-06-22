import React, { useState } from "react";
import { SupportedLocale } from "../constants";
import { Select, MenuItem, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { requestLocaleChange } from "../redux/localeDetector";
import { RootState } from "../redux/rootReducer";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  list: {
    padding: theme.spacing(2),
  },
  selectRoot: {
    backgroundColor: "#333333",
    borderRadius: "3px",
    borderColor: theme.palette.primary.dark,
  },
  selectMenu: {
    color: "#8D8D8D",
    backgroundColor: "3E3E3E",
  },
  languageText: {
    fontSize: 10,
    color: "white",
    paddingBottom: theme.spacing(1),
  },
}));

const LocaleSelector: React.FC = (): ReturnType<React.FC> => {
  const locale = useSelector(
    (state: RootState) => state.localeDetector.currentLocale
  );

  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>(locale);
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation("header");

  const handleSelectLanguage = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    setCurrentLocale(event.target.value as SupportedLocale);
    dispatch(requestLocaleChange(event.target.value as SupportedLocale));
  };

  return (
    <div className={classes.list}>
      <Typography className={classes.languageText}>{t("locale")}</Typography>
      <Select
        labelId="language-selector"
        id="language-selector"
        value={currentLocale}
        onChange={handleSelectLanguage}
        style={{ width: "100%" }}
        classes={{
          select: classes.selectRoot,
          selectMenu: classes.selectMenu,
        }}
      >
        {Object.entries(SupportedLocale).map(([key, value]) => (
          <MenuItem value={value as string}>{key}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LocaleSelector;
