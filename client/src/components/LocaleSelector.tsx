import React from "react";
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

  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation("languages");

  const handleSelectLanguage = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    dispatch(requestLocaleChange(event.target.value as SupportedLocale));
  };

  return (
    <div className={classes.list}>
      <Typography className={classes.languageText}>{t("header")}</Typography>
      <Select
        labelId="language-selector"
        id="language-selector"
        value={locale}
        onChange={handleSelectLanguage}
        style={{ width: "100%" }}
        classes={{
          select: classes.selectRoot,
          selectMenu: classes.selectMenu,
        }}
      >
        {Object.values(SupportedLocale).map((value) => (
          <MenuItem value={value as string}>{t(value)}</MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LocaleSelector;
