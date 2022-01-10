import PropTypes, { object } from 'prop-types'

const PhotoInputForm = ({ handleSubmit }) => {

    // Код из задания
    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', evt => {
                resolve(evt.currentTarget.result);
            });

            fileReader.addEventListener('error', evt => {
                reject(new Error(evt.currentTarget.error));
            });

            fileReader.readAsDataURL(file);
        });
    }

    // добавилЮ чтобы возвращало еще и имя файла
    const handleSelect = async (evt) => {
        const files = [...evt.target.files];
        let urls = [];
        for (let i in files) {
            let fileResult = await fileToDataUrl(files[i]);
            urls.push({
                name: files[i].name,
                url: fileResult
            });
        }
        // Вызов родительской функции
        // Параметры в родительскую функцию: массив URL-ов загруженных файлов
        handleSubmit(urls);
    }

    return (
        <form className="photo-form">

            <label htmlFor="photo">
                <div className="photo-form-block">
                    Click to select...
                </div>
            </label>

            <div className="photo-form-input">
                <input type="file" name="photo" id="photo" accept="image/*" multiple
                    onChange={(e) => handleSelect(e)}
                />
            </div>

        </form >
    )
};


PhotoInputForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};


export default PhotoInputForm;