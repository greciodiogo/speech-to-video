import { KEYS } from '@constants';
import axios from 'axios';

/**
 * Uploads a file to cloudnary
 * @param file the file to be uploaded
 * @function successCallback called on success upload
 * @function failCallback called when uploads fail
 */
export async function uploadFile(file, successCallback, failCallback) {
    try {
        const { cloudName, cloudUploadPreset } = KEYS;
        const data = new FormData();

        const url = `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`;

        data.append('file', file);
        data.append('upload_preset', cloudUploadPreset);

        axios.post(url, data).then((response) => {
            if (successCallback) {
                successCallback(response.data);
            }
        });
    } catch (error) {
        if (failCallback) {
            failCallback('common:errors.something-wrong-general');
        }
    }
}
