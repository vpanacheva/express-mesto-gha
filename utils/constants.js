const SECRET_KEY = '96986b7f83085e85a2a761e98319836da8000b8e0acb245934d3e35fa499a159';

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
const CREATED_STATUS = 201;

module.exports = {
  SECRET_KEY,
  URL_REGEX,
  CREATED_STATUS,
};
