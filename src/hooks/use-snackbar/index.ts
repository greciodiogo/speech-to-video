import { errorStyle, successStyle } from './styles';
import useTranslation from 'next-translate/useTranslation';
import { useSnackbar as useDefaultSnackbar } from 'react-simple-snackbar';

export const useSnackbar = () => {
    const { t } = useTranslation();
    const [open, closeSnackbar] = useDefaultSnackbar();
    const [openError, closeErrorSnackbar] = useDefaultSnackbar(errorStyle);
    const [openSuccess, closeSuccessSnackbar] =
        useDefaultSnackbar(successStyle);

    const openSnackbar = (path: string) => open(t(path));
    const openErrorSnackbar = (path: string) => openError(t(path));
    const openSuccessSnackbar = (path: string) => openSuccess(t(path));

    return {
        openSnackbar,
        openErrorSnackbar,
        openSuccessSnackbar,
        closeSnackbar,
        closeErrorSnackbar,
        closeSuccessSnackbar,
    };
};
