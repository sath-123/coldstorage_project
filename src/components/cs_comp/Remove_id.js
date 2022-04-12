import React from "react";
import { makeStyles } from "@material-ui/core";
import { API, graphqlOperation } from "aws-amplify";
import { deleteColdStorageID } from "../../graphql/mutations";
import { listColdStorageIDS } from "../../graphql/queries";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Remove_id = () => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    let cs_id_items = {};
    let cs_id = {};
    let find = {};
    let check = false;
    try {
      const ColdStorageIDS = await API.graphql({
        query: listColdStorageIDS,
      });
      cs_id_items = ColdStorageIDS.data.listColdStorageIDS.items;
      cs_id = cs_id_items.map((x) => x.coldstorage_id);
    } catch (err) {
      console.log("error fetching data");
      check = true;
    }

    if (cs_id.includes(data.coldstorage_id) === true && check === false) {
      find = cs_id_items.find(function (id) {
        if (id.coldstorage_id === data.coldstorage_id) return true;
      });

      try {
        await API.graphql(
          graphqlOperation(deleteColdStorageID, { input: { id: find.id } })
        );
        alert("This coldstorage id has been deleted.");
        window.location.replace(window.location.pathname);
      } catch (err) {
        console.log("error posting data");
      }
    } else {
      alert("This coldstorage id does not exist.");
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="coldstorage_id"
        control={control}
        defaultValue="TTECH-"
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="ColdStorage-ID"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "ColdStorage-ID is required" }}
      />
      <div>
        <Button type="submit" variant="contained" color="primary">
          Remove ID
        </Button>
      </div>
    </form>
  );
};

export default Remove_id;