/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UntitledModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UntitledModelUpdateForm(props) {
  const {
    id: idProp,
    untitledModel: untitledModelModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    date: "",
    tags: "",
    category: "",
    afirmacion: "",
    analisis: "",
    veredicto: "",
    imag: "",
    description: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [date, setDate] = React.useState(initialValues.date);
  const [tags, setTags] = React.useState(initialValues.tags);
  const [category, setCategory] = React.useState(initialValues.category);
  const [afirmacion, setAfirmacion] = React.useState(initialValues.afirmacion);
  const [analisis, setAnalisis] = React.useState(initialValues.analisis);
  const [veredicto, setVeredicto] = React.useState(initialValues.veredicto);
  const [imag, setImag] = React.useState(initialValues.imag);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = untitledModelRecord
      ? { ...initialValues, ...untitledModelRecord }
      : initialValues;
    setName(cleanValues.name);
    setDate(cleanValues.date);
    setTags(cleanValues.tags);
    setCategory(cleanValues.category);
    setAfirmacion(cleanValues.afirmacion);
    setAnalisis(cleanValues.analisis);
    setVeredicto(cleanValues.veredicto);
    setImag(cleanValues.imag);
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [untitledModelRecord, setUntitledModelRecord] = React.useState(
    untitledModelModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UntitledModel, idProp)
        : untitledModelModelProp;
      setUntitledModelRecord(record);
    };
    queryData();
  }, [idProp, untitledModelModelProp]);
  React.useEffect(resetStateValues, [untitledModelRecord]);
  const validations = {
    name: [],
    date: [],
    tags: [],
    category: [],
    afirmacion: [],
    analisis: [],
    veredicto: [],
    imag: [],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          date,
          tags,
          category,
          afirmacion,
          analisis,
          veredicto,
          imag,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            UntitledModel.copyOf(untitledModelRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UntitledModelUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              date,
              tags,
              category,
              afirmacion,
              analisis,
              veredicto,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date: value,
              tags,
              category,
              afirmacion,
              analisis,
              veredicto,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Tags"
        isRequired={false}
        isReadOnly={false}
        value={tags}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags: value,
              category,
              afirmacion,
              analisis,
              veredicto,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.tags ?? value;
          }
          if (errors.tags?.hasError) {
            runValidationTasks("tags", value);
          }
          setTags(value);
        }}
        onBlur={() => runValidationTasks("tags", tags)}
        errorMessage={errors.tags?.errorMessage}
        hasError={errors.tags?.hasError}
        {...getOverrideProps(overrides, "tags")}
      ></TextField>
      <TextField
        label="Category"
        isRequired={false}
        isReadOnly={false}
        value={category}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags,
              category: value,
              afirmacion,
              analisis,
              veredicto,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.category ?? value;
          }
          if (errors.category?.hasError) {
            runValidationTasks("category", value);
          }
          setCategory(value);
        }}
        onBlur={() => runValidationTasks("category", category)}
        errorMessage={errors.category?.errorMessage}
        hasError={errors.category?.hasError}
        {...getOverrideProps(overrides, "category")}
      ></TextField>
      <TextField
        label="Afirmacion"
        isRequired={false}
        isReadOnly={false}
        value={afirmacion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags,
              category,
              afirmacion: value,
              analisis,
              veredicto,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.afirmacion ?? value;
          }
          if (errors.afirmacion?.hasError) {
            runValidationTasks("afirmacion", value);
          }
          setAfirmacion(value);
        }}
        onBlur={() => runValidationTasks("afirmacion", afirmacion)}
        errorMessage={errors.afirmacion?.errorMessage}
        hasError={errors.afirmacion?.hasError}
        {...getOverrideProps(overrides, "afirmacion")}
      ></TextField>
      <TextField
        label="Analisis"
        isRequired={false}
        isReadOnly={false}
        value={analisis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags,
              category,
              afirmacion,
              analisis: value,
              veredicto,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.analisis ?? value;
          }
          if (errors.analisis?.hasError) {
            runValidationTasks("analisis", value);
          }
          setAnalisis(value);
        }}
        onBlur={() => runValidationTasks("analisis", analisis)}
        errorMessage={errors.analisis?.errorMessage}
        hasError={errors.analisis?.hasError}
        {...getOverrideProps(overrides, "analisis")}
      ></TextField>
      <TextField
        label="Veredicto"
        isRequired={false}
        isReadOnly={false}
        value={veredicto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags,
              category,
              afirmacion,
              analisis,
              veredicto: value,
              imag,
              description,
            };
            const result = onChange(modelFields);
            value = result?.veredicto ?? value;
          }
          if (errors.veredicto?.hasError) {
            runValidationTasks("veredicto", value);
          }
          setVeredicto(value);
        }}
        onBlur={() => runValidationTasks("veredicto", veredicto)}
        errorMessage={errors.veredicto?.errorMessage}
        hasError={errors.veredicto?.hasError}
        {...getOverrideProps(overrides, "veredicto")}
      ></TextField>
      <TextField
        label="Imag"
        isRequired={false}
        isReadOnly={false}
        value={imag}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags,
              category,
              afirmacion,
              analisis,
              veredicto,
              imag: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.imag ?? value;
          }
          if (errors.imag?.hasError) {
            runValidationTasks("imag", value);
          }
          setImag(value);
        }}
        onBlur={() => runValidationTasks("imag", imag)}
        errorMessage={errors.imag?.errorMessage}
        hasError={errors.imag?.hasError}
        {...getOverrideProps(overrides, "imag")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              date,
              tags,
              category,
              afirmacion,
              analisis,
              veredicto,
              imag,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || untitledModelModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || untitledModelModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
