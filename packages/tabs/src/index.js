import React, { useState, createContext, useContext } from "react";
import { Box } from "@oneloop/box";

const TabsContext = createContext();

export const Tabs = ({ children, ...props }) => {
  const [active, setActive] = useState();
  const value = React.useMemo(() => ({ active, setActive }), [active]);
  return (
    <TabsContext.Provider value={value}>
      <Box {...props} __css={{ display: "inline-flex" }}>
        {children}
      </Box>
    </TabsContext.Provider>
  );
};

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(
      "Tabs compound components cannot be rendered outside the Tabs component"
    );
  }
  return context;
};

const Tab = ({ id, children, ...props }) => {
  const { active, setActive } = useTabsContext();
  return (
    <Box
      onClick={() => setActive(id)}
      {...props}
      __css={{
        padding: "14px 38px",
        position: "relative",
        cursor: "pointer",
        "> *": {
          textDecoration: "none"
        }
      }}
    >
      {children}
      {active === id && (
        <Box
          as="span"
          __css={{
            borderRadius: "4px 4px 0 0",
            display: "block",
            backgroundColor: "white",
            height: "4px",
            position: "absolute",
            right: "10px",
            left: "10px",
            bottom: 0
          }}
        />
      )}
    </Box>
  );
};

Tabs.Tab = Tab;
