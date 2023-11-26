import { absoluteLoaderTheme } from 'components/AbsoluteLoader/theme';
import { appLoaderTheme } from 'components/AppLoader/theme';
import { infoBlockTheme } from 'components/Blocks/InfoBlock/theme';
import { breadCrumbTheme } from 'components/BreadCrumb/theme';
import { buttonTheme } from 'components/Button/theme';
import { controlledPopover } from 'components/ControlledPopover/theme';
import { autocompleteSelectTheme } from 'components/Controls/AutocompleteSelect/theme';
import { checkboxTheme } from 'components/Controls/Checkbox/theme';
import { countryPhoneTheme } from 'components/Controls/CountryPhone/theme';
import { inputTheme } from 'components/Controls/Input/theme';
import { radioSelectTheme } from 'components/Controls/RadioSelect/theme';
import { switchTheme } from 'components/Controls/Switch/theme';
import { switchInputTheme } from 'components/Controls/SwitchInput/theme';
import { datepickerTheme } from 'components/Datepicker/theme';
import { detailTheme } from 'components/Detail/theme';
import { dividerTheme } from 'components/Divider/theme';
import { filtersButtonTheme } from 'components/FiltersButton/theme';
import { fieldWrapperTheme } from 'components/Form/FieldWrapper/theme';
import { formNavigationTheme } from 'components/Form/FormNavigation/theme';
import { formHeaderTheme } from 'components/Form/Header/theme';
import { formTheme } from 'components/Form/theme';
import { dataGridTheme } from 'components/Grids/DataGrid/theme';
import { filteredItemsSelectedTheme } from 'components/GroupEditSidebar/FilteredItemsSelected/theme';
import { groupEditListItemTheme } from 'components/GroupEditSidebar/ListItem/theme';
import { groupEditSidebar } from 'components/GroupEditSidebar/theme';
import { highlightedTextTheme } from 'components/HighlightedText/theme';
import { linkTheme } from 'components/Link/theme';
import { loaderTheme } from 'components/Loader/styled';
import { logoTheme } from 'components/Logo/theme';
import { modalContainerTheme } from 'components/ModalContainer/theme';
import { noItemsFoundTheme } from 'components/NoItemsFound/theme';
import { notificationTheme } from 'components/Notification/theme';
import { colorItemTheme } from 'components/Pickers/ColorItem/theme';
import { colorPickerInputTheme } from 'components/Pickers/ColorPickerInput/theme';
import { colorPickerTheme } from 'components/Pickers/ColorPickerPopover/ColorPicker/theme';
import { variableColorPickerTheme } from 'components/Pickers/VariableColorPickerPopover/VariableColorPicker/theme';
import { popoverTheme } from 'components/Popover/theme';
import { presetsListTheme } from 'components/PresetsList/theme';
import { previewAppTheme } from 'components/PreviewApp/theme';
import { randomImagePreviewTheme } from 'components/RandomImgPreview/theme';
import { scrollbarTheme } from 'components/Scrollbar/theme';
import { selectModalEnterTheme } from 'components/SelectModalEnter/theme';
import { tabsTheme, tabTheme } from 'components/Tabs/theme';
import { statusTheme } from 'components/Tags/Status/theme';
import { tagTheme } from 'components/Tags/Tag/theme';
import { typeTheme } from 'components/Tags/Type/theme';
import { tooltipTheme } from 'components/Tooltip/theme';
import { transferEnterTheme } from 'components/Transfers/TransferEnter/theme';
import { transferListTheme } from 'components/Transfers/TransferList/theme';
import { transferPageTheme } from 'components/Transfers/TransferPage/theme';
import { transferTreeTheme } from 'components/Transfers/TransferTree/theme';
import { typographyTheme } from 'components/Typography/theme';
import { groupEditConfirmModal } from 'routes/pages/AuthorizedStack/PspManagement/TerminalsLinks/GroupEdit/hooks/theme';
import { wrongPageTheme } from 'routes/pages/UnauthorizedStack/SomethingWrongPages/WrongPageLayout/theme';

import { blockDetailTheme } from '../components/Blocks/BlockDetail/theme';
import { periodInputsTheme } from '../components/Controls/PeriodInputs/theme';
import { preselectedFieldTheme } from '../components/Form/PreselectedField/theme';

export enum COMPONENTS_NAMES {
  ABSOLUTE_LOADER = 'absoluteLoader',
  APP_LOADER = 'appLoader',
  BREAD_CRUMB = 'breadCrumb',
  BUTTON = 'button',
  CONTROLLED_POPOVER = 'controlledPopover',
  DATEPICKER = 'datepicker',
  AUTOCOMPLETE_SELECT = 'autocompleteSelect',
  CHECKBOX = 'checkbox',
  COUNTRY_PHONE = 'countryPhone',
  INPUT = 'input',
  RADIO_SELECT = 'radioSelect',
  SWITCH = 'switch',
  PRESETED_FIELD = 'presetedField',
  DETAIL = 'detail',
  BLOCK_DETAIL = 'blockDetail',
  FIELD_WRAPPER = 'fieldWrapper',
  DIVIDER = 'divider',
  FILTERS_BUTTON = 'filtersButton',
  LINK = 'link',
  LOADER = 'loader',
  MODAL_CONTAINER = 'modalContainer',
  NO_ITEMS_FOUND = 'noItemsFound',
  NOTIFICATION = 'notification',
  COLOR_ITEM = 'colorItem',
  COLOR_PICKER_INPUT = 'colorPickerInput',
  COLOR_PICKER = 'colorPicker',
  VARIABLE_PICKER = 'variableColorPicker',
  POPOVER = 'popover',
  PRESETS_LIST = 'presetsList',
  PREVIEW_APP = 'previewApp',
  RANDOM_IMAGE_PREVIEW = 'randomImagePreview',
  SCROLLBAR = 'scrollbar',
  SELECT_MODAL_ENTER = 'selectModalEnter',
  TAB = 'tab',
  TABS = 'tabs',
  DATA_GRID = 'dataGrid',
  HIGHLIGHTED_TEXT = 'highlightedText',
  FORM = 'form',
  INFO_BLOCK = 'infoBlock',
  FROM_NAVIGATION = 'fromNavigation',
  SWITCH_INPUT = 'switchInput',
  FORM_HEADER = 'formHeader',
  PERIOD_INPUTS = 'periodInputs',
  STATUS = 'status',
  TAG = 'tag',
  TYPE = 'type',
  LOGO = 'logo',
  TOOLTIP = 'tooltip',
  TRANSFER_TREE = 'transferTree',
  TRANSFER_LIST = 'transferList',
  TRANSFER_ENTER = 'transferEnter',
  TRANSFER_PAGE = 'transferPage',
  TYPOGRAPHY = 'typography',
  GROUP_EDIT_SIDEBAR = 'groupEditSidebar',
  GROUP_EDIT_LIST_ITEM = 'groupEditListItem',
  GROUP_EDIT_CONFIRM_MODAL = 'groupEditModal',
  WRONG_PAGE = 'wrongPage',
  FILTERED_ITEMS_SELECTED = 'filteredItemsSelected',
}

export const COMPONENTS_MAPPING = Object.fromEntries(
  Object.entries(COMPONENTS_NAMES).map(([_key, value]) => [value, value])
);

export const COMPONENTS_DEFAULT_THEMES = {
  [COMPONENTS_NAMES.ABSOLUTE_LOADER]: absoluteLoaderTheme,
  [COMPONENTS_NAMES.APP_LOADER]: appLoaderTheme,
  [COMPONENTS_NAMES.BREAD_CRUMB]: breadCrumbTheme,
  [COMPONENTS_NAMES.BUTTON]: buttonTheme,
  [COMPONENTS_NAMES.DATEPICKER]: datepickerTheme,
  [COMPONENTS_NAMES.CONTROLLED_POPOVER]: controlledPopover,
  [COMPONENTS_NAMES.AUTOCOMPLETE_SELECT]: autocompleteSelectTheme,
  [COMPONENTS_NAMES.CHECKBOX]: checkboxTheme,
  [COMPONENTS_NAMES.COUNTRY_PHONE]: countryPhoneTheme,
  [COMPONENTS_NAMES.INPUT]: inputTheme,
  [COMPONENTS_NAMES.RADIO_SELECT]: radioSelectTheme,
  [COMPONENTS_NAMES.SWITCH]: switchTheme,
  [COMPONENTS_NAMES.DETAIL]: detailTheme,
  [COMPONENTS_NAMES.BLOCK_DETAIL]: blockDetailTheme,
  [COMPONENTS_NAMES.FIELD_WRAPPER]: fieldWrapperTheme,
  [COMPONENTS_NAMES.DIVIDER]: dividerTheme,
  [COMPONENTS_NAMES.FILTERS_BUTTON]: filtersButtonTheme,
  [COMPONENTS_NAMES.LINK]: linkTheme,
  [COMPONENTS_NAMES.LOADER]: loaderTheme,
  [COMPONENTS_NAMES.MODAL_CONTAINER]: modalContainerTheme,
  [COMPONENTS_NAMES.NO_ITEMS_FOUND]: noItemsFoundTheme,
  [COMPONENTS_NAMES.NOTIFICATION]: notificationTheme,
  [COMPONENTS_NAMES.COLOR_ITEM]: colorItemTheme,
  [COMPONENTS_NAMES.COLOR_PICKER_INPUT]: colorPickerInputTheme,
  [COMPONENTS_NAMES.COLOR_PICKER]: colorPickerTheme,
  [COMPONENTS_NAMES.VARIABLE_PICKER]: variableColorPickerTheme,
  [COMPONENTS_NAMES.POPOVER]: popoverTheme,
  [COMPONENTS_NAMES.PRESETS_LIST]: presetsListTheme,
  [COMPONENTS_NAMES.PREVIEW_APP]: previewAppTheme,
  [COMPONENTS_NAMES.RANDOM_IMAGE_PREVIEW]: randomImagePreviewTheme,
  [COMPONENTS_NAMES.SCROLLBAR]: scrollbarTheme,
  [COMPONENTS_NAMES.SELECT_MODAL_ENTER]: selectModalEnterTheme,
  [COMPONENTS_NAMES.TAB]: tabTheme,
  [COMPONENTS_NAMES.TABS]: tabsTheme,
  [COMPONENTS_NAMES.DATA_GRID]: dataGridTheme,
  [COMPONENTS_NAMES.HIGHLIGHTED_TEXT]: highlightedTextTheme,
  [COMPONENTS_NAMES.FORM]: formTheme,
  [COMPONENTS_NAMES.STATUS]: statusTheme,
  [COMPONENTS_NAMES.TAG]: tagTheme,
  [COMPONENTS_NAMES.TYPE]: typeTheme,
  [COMPONENTS_NAMES.LOGO]: logoTheme,
  [COMPONENTS_NAMES.INFO_BLOCK]: infoBlockTheme,
  [COMPONENTS_NAMES.PRESETED_FIELD]: preselectedFieldTheme,
  [COMPONENTS_NAMES.FROM_NAVIGATION]: formNavigationTheme,
  [COMPONENTS_NAMES.SWITCH_INPUT]: switchInputTheme,
  [COMPONENTS_NAMES.FORM_HEADER]: formHeaderTheme,
  [COMPONENTS_NAMES.PERIOD_INPUTS]: periodInputsTheme,
  [COMPONENTS_NAMES.TOOLTIP]: tooltipTheme,
  [COMPONENTS_NAMES.TRANSFER_TREE]: transferTreeTheme,
  [COMPONENTS_NAMES.TRANSFER_LIST]: transferListTheme,
  [COMPONENTS_NAMES.TRANSFER_ENTER]: transferEnterTheme,
  [COMPONENTS_NAMES.TRANSFER_PAGE]: transferPageTheme,
  [COMPONENTS_NAMES.TYPOGRAPHY]: typographyTheme,
  [COMPONENTS_NAMES.GROUP_EDIT_SIDEBAR]: groupEditSidebar,
  [COMPONENTS_NAMES.GROUP_EDIT_LIST_ITEM]: groupEditListItemTheme,
  [COMPONENTS_NAMES.GROUP_EDIT_CONFIRM_MODAL]: groupEditConfirmModal,
  [COMPONENTS_NAMES.WRONG_PAGE]: wrongPageTheme,
  [COMPONENTS_NAMES.FILTERED_ITEMS_SELECTED]: filteredItemsSelectedTheme,
};
