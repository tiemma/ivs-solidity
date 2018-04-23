captureFile = event => {
  event.stopPropagation();
  event.preventDefault();
  const file = event.target.files[0];
  let reader = new window.FileReader();
  reader.readAsArrayBuffer(file);
  reader.onloadend = () => {
    const blob = this.convertToBuffer(reader);
  };
};

convertToBuffer = async reader => {
  //file is converted to a buffer for upload to IPFS
  const buffer = await Buffer.from(reader.result);

  return buffer;
};
