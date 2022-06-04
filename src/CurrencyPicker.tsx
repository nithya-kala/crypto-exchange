import { createStyles, Group, Menu, UnstyledButton } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import React, { useState } from "react";
import { ChevronDown } from "tabler-icons-react";

export type CxOption = {
  label: string;
  image: React.ReactElement;
};

const useStyles = createStyles((theme, { opened }: { opened: boolean }) => ({
  control: {
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 15px",
    borderRadius: theme.radius.sm,
    border: `1px solid ${theme.colors.gray[4]}`,
    transition: "background-color 150ms ease",
    backgroundColor: opened ? theme.colors.gray[0] : theme.white,

    "&:hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },

  label: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  icon: {
    transition: "transform 150ms ease",
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  },
}));

type CurrencyPicker = {
  options: CxOption[];
  selected: CxOption;
  onChange: (v: CxOption) => void;
};

export const CurrencyPicker: React.FC<CurrencyPicker> = (props) => {
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles({ opened });

  const items = props.options.map((item) => (
    <Menu.Item
      icon={item.image}
      onClick={() => props.onChange(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      transition="pop"
      transitionDuration={150}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="sm"
      control={
        <UnstyledButton className={classes.control}>
          <Group spacing="xs">
            {props.selected.image}
            <span className={classes.label}>{props.selected.label}</span>
          </Group>
          <ChevronDown size={16} className={classes.icon} />
        </UnstyledButton>
      }
    >
      {items}
    </Menu>
  );
};
