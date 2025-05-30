// Placeholder for frame data. Make sure these paths are correct and images exist.
// For the image to show *inside* the frame, these frame PNGs MUST have transparent cutouts.
const frameData = [
    { id: 'frame1', src: 'frames/frame1.png', name: 'Elegant Oval Gold', ratio: '9/16' },
    { id: 'frame2', src: 'frames/frame2.png', name: 'Floral Gold', ratio: '9/16' },
    { id: 'frame3', src: 'frames/frame3.png', name: 'Square Gold', ratio: '9/16' },
    { id: 'frame4', src: 'frames/frame4.png', name: 'Ornate Oval Gold', ratio: '9/16' },
    { id: 'frame5', src: 'frames/frame5.png', name: 'Elegant Oval Gold1', ratio: '9/16' },
    { id: 'frame6', src: 'frames/frame6.png', name: 'Floral Gold1', ratio: '9/16' },
    { id: 'frame7', src: 'frames/frame7.png', name: 'Square Gold1', ratio: '9/16' },
    { id: 'frame8', src: 'frames/frame8.png', name: 'Ornate Oval Gold1', ratio: '9/16' },
    { id: 'frame9', src: 'frames/frame9.png', name: 'Elegant Oval Gold2', ratio: '9/16' },
    { id: 'frame10', src: 'frames/frame10.png', name: 'Floral Gold2', ratio: '9/16' },
    { id: 'frame11', src: 'frames/frame11.png', name: 'Square Gold2', ratio: '9/16' },
    { id: 'frame12', src: 'frames/frame12.png', name: 'Ornate Oval Gold2', ratio: '9/16' },
    { id: 'frame13', src: 'frames/frame13.png', name: 'Elegant Oval Gold3', ratio: '9/16' },
    { id: 'frame14', src: 'frames/frame14.png', name: 'Floral Gold3', ratio: '9/16' },
    { id: 'frame15', src: 'frames/frame15.png', name: 'Square Gold3', ratio: '9/16' },
    { id: 'frame16', src: 'frames/frame16.png', name: 'Ornate Oval Gold3', ratio: '9/16' },
    { id: 'frame17', src: 'frames/frame17.png', name: 'Elegant Oval Gold4', ratio: '9/16' },
    { id: 'frame18', src: 'frames/frame18.png', name: 'Floral Gold4', ratio: '9/16' },
    { id: 'frame19', src: 'frames/frame19.png', name: 'Square Gold4', ratio: '9/16' },
    { id: 'frame20', src: 'frames/frame20.png', name: 'Ornate Oval Gold4', ratio: '9/16' },
    { id: 'frame21', src: 'frames/frame21.png', name: 'Elegant Oval Gold5', ratio: '9/16' },
    { id: 'frame22', src: 'frames/frame22.png', name: 'Floral Gold5', ratio: '9/16' },
    { id: 'frame23', src: 'frames/frame23.png', name: 'Square Gold5', ratio: '9/16' },
    { id: 'frame24', src: 'frames/frame24.png', name: 'Ornate Oval Gold5', ratio: '9/16' },
    { id: 'frame25', src: 'frames/frame25.png', name: 'Elegant Oval Gold6', ratio: '9/16' },
    { id: 'frame26', src: 'frames/frame26.png', name: 'Floral Gold6', ratio: '9/16' },
    { id: 'frame27', src: 'frames/frame27.png', name: 'Elegant Oval Gold6', ratio: '9/16' },
    { id: 'frame28', src: 'frames/frame28.png', name: 'Floral Gold6', ratio: '9/16' },
    { id: 'frame29', src: 'frames/frame29.png', name: 'Square Gold7', ratio: '9/16' },
    { id: 'frame30', src: 'frames/frame30.png', name: 'Ornate Oval Gold7', ratio: '9/16' },
    { id: 'frame31', src: 'frames/frame31.png', name: 'Elegant Oval Gold7', ratio: '9/16' },
    { id: 'frame32', src: 'frames/frame32.png', name: 'Floral Gold7', ratio: '9/16' },
    { id: 'frame33', src: 'frames/frame33.png', name: 'Square Gold8', ratio: '9/16' },
    { id: 'frame34', src: 'frames/frame34.png', name: 'Ornate Oval Gold8', ratio: '9/16' },
    { id: 'frame35', src: 'frames/frame35.png', name: 'Elegant Oval Gold8', ratio: '9/16' },
    { id: 'frame36', src: 'frames/frame36.png', name: 'Floral Gold8', ratio: '9/16' },
    { id: 'frame37', src: 'frames/frame37.png', name: 'Square Gold9', ratio: '9/16' },
    { id: 'frame38', src: 'frames/frame38.png', name: 'Ornate Oval Gold9', ratio: '9/16' },
    { id: 'frame39', src: 'frames/frame39.png', name: 'Elegant Oval Gold9', ratio: '9/16' },
    { id: 'frame40', src: 'frames/frame40.png', name: 'Floral Gold9', ratio: '9/16' },
    { id: 'frame41', src: 'frames/frame41.png', name: 'Square Gold10', ratio: '9/16' },
    { id: 'frame42', src: 'frames/frame42.png', name: 'Ornate Oval Gold10', ratio: '9/16'},
    { id: 'frame43', src: 'frames/frame43.png', name: 'Elegant Oval Gold10', ratio: '9/16' },
{ id: 'frame44', src: 'frames/frame44.png', name: 'Floral Gold10', ratio: '9/16' },
{ id: 'frame45', src: 'frames/frame45.png', name: 'Square Gold11', ratio: '9/16' },
{ id: 'frame46', src: 'frames/frame46.png', name: 'Ornate Oval Gold11', ratio: '9/16' },
{ id: 'frame47', src: 'frames/frame47.png', name: 'Elegant Oval Gold11', ratio: '9/16' },
{ id: 'frame48', src: 'frames/frame48.png', name: 'Floral Gold11', ratio: '9/16' },
{ id: 'frame49', src: 'frames/frame49.png', name: 'Square Gold12', ratio: '9/16' },
{ id: 'frame50', src: 'frames/frame50.png', name: 'Ornate Oval Gold12', ratio: '9/16' },
{ id: 'frame51', src: 'frames/frame51.png', name: 'Elegant Oval Gold12', ratio: '9/16' },
{ id: 'frame52', src: 'frames/frame52.png', name: 'Floral Gold12', ratio: '9/16' },
{ id: 'frame53', src: 'frames/frame53.png', name: 'Square Gold13', ratio: '9/16' },
{ id: 'frame54', src: 'frames/frame54.png', name: 'Ornate Oval Gold13', ratio: '9/16' },
{ id: 'frame55', src: 'frames/frame55.png', name: 'Elegant Oval Gold13', ratio: '9/16' },
{ id: 'frame56', src: 'frames/frame56.png', name: 'Floral Gold13', ratio: '9/16' },
{ id: 'frame57', src: 'frames/frame57.png', name: 'Square Gold14', ratio: '9/16' },
{ id: 'frame58', src: 'frames/frame58.png', name: 'Ornate Oval Gold14', ratio: '9/16' },
{ id: 'frame59', src: 'frames/frame59.png', name: 'Elegant Oval Gold14', ratio: '9/16' },
{ id: 'frame60', src: 'frames/frame60.png', name: 'Floral Gold14', ratio: '9/16' },
{ id: 'frame61', src: 'frames/frame61.png', name: 'Square Gold15', ratio: '9/16' },
{ id: 'frame62', src: 'frames/frame62.png', name: 'Ornate Oval Gold15', ratio: '9/16' },
{ id: 'frame63', src: 'frames/frame63.png', name: 'Elegant Oval Gold15', ratio: '9/16' },
{ id: 'frame64', src: 'frames/frame64.png', name: 'Floral Gold15', ratio: '9/16' },
{ id: 'frame65', src: 'frames/frame65.png', name: 'Square Gold16', ratio: '9/16' },
{ id: 'frame66', src: 'frames/frame66.png', name: 'Ornate Oval Gold16', ratio: '9/16' },
{ id: 'frame67', src: 'frames/frame67.png', name: 'Elegant Oval Gold16', ratio: '9/16' },
{ id: 'frame68', src: 'frames/frame68.png', name: 'Floral Gold16', ratio: '9/16' },
{ id: 'frame69', src: 'frames/frame69.png', name: 'Square Gold17', ratio: '9/16' },
{ id: 'frame70', src: 'frames/frame70.png', name: 'Ornate Oval Gold17', ratio: '9/16' },
{ id: 'frame71', src: 'frames/frame71.png', name: 'Elegant Oval Gold17', ratio: '9/16' },
{ id: 'frame72', src: 'frames/frame72.png', name: 'Floral Gold17', ratio: '9/16' },
{ id: 'frame73', src: 'frames/frame73.png', name: 'Square Gold18', ratio: '9/16' },
{ id: 'frame74', src: 'frames/frame74.png', name: 'Ornate Oval Gold18', ratio: '9/16' },
{ id: 'frame75', src: 'frames/frame75.png', name: 'Elegant Oval Gold18', ratio: '9/16' },
{ id: 'frame76', src: 'frames/frame76.png', name: 'Floral Gold18', ratio: '9/16' },
{ id: 'frame77', src: 'frames/frame77.png', name: 'Square Gold19', ratio: '9/16' },
{ id: 'frame78', src: 'frames/frame78.png', name: 'Ornate Oval Gold19', ratio: '9/16' },
{ id: 'frame79', src: 'frames/frame79.png', name: 'Elegant Oval Gold19', ratio: '9/16' },
{ id: 'frame80', src: 'frames/frame80.png', name: 'Floral Gold19', ratio: '9/16' },
{ id: 'frame81', src: 'frames/frame81.png', name: 'Square Gold20', ratio: '9/16' },
{ id: 'frame82', src: 'frames/frame82.png', name: 'Ornate Oval Gold20', ratio: '9/16' },
{ id: 'frame83', src: 'frames/frame83.png', name: 'Elegant Oval Gold20', ratio: '9/16' },
{ id: 'frame84', src: 'frames/frame84.png', name: 'Floral Gold20', ratio: '9/16' },
{ id: 'frame85', src: 'frames/frame85.png', name: 'Square Gold21', ratio: '9/16' },
{ id: 'frame86', src: 'frames/frame86.png', name: 'Ornate Oval Gold21', ratio: '9/16' },
{ id: 'frame87', src: 'frames/frame87.png', name: 'Elegant Oval Gold21', ratio: '9/16' },
{ id: 'frame88', src: 'frames/frame88.png', name: 'Floral Gold21', ratio: '9/16' },
{ id: 'frame89', src: 'frames/frame89.png', name: 'Square Gold22', ratio: '9/16' },
{ id: 'frame90', src: 'frames/frame90.png', name: 'Ornate Oval Gold22', ratio: '9/16' },
{ id: 'frame91', src: 'frames/frame91.png', name: 'Elegant Oval Gold22', ratio: '9/16' },
{ id: 'frame92', src: 'frames/frame92.png', name: 'Floral Gold22', ratio: '9/16' },
{ id: 'frame93', src: 'frames/frame93.png', name: 'Square Gold23', ratio: '9/16' },
{ id: 'frame94', src: 'frames/frame94.png', name: 'Ornate Oval Gold23', ratio: '9/16' },
{ id: 'frame95', src: 'frames/frame95.png', name: 'Elegant Oval Gold23', ratio: '9/16' },
{ id: 'frame96', src: 'frames/frame96.png', name: 'Floral Gold23', ratio: '9/16' },
{ id: 'frame97', src: 'frames/frame97.png', name: 'Square Gold24', ratio: '9/16' },
{ id: 'frame98', src: 'frames/frame98.png', name: 'Ornate Oval Gold24', ratio: '9/16' },
{ id: 'frame99', src: 'frames/frame99.png', name: 'Elegant Oval Gold24', ratio: '9/16' },
{ id: 'frame100', src: 'frames/frame100.png', name: 'Floral Gold24', ratio: '9/16' },
{ id: 'frame101', src: 'frames/frame101.png', name: 'Square Gold25', ratio: '9/16' },
{ id: 'frame102', src: 'frames/frame102.png', name: 'Ornate Oval Gold25', ratio: '9/16' },
{ id: 'frame103', src: 'frames/frame103.png', name: 'Elegant Oval Gold25', ratio: '9/16' },
{ id: 'frame104', src: 'frames/frame104.png', name: 'Floral Gold25', ratio: '9/16' },
{ id: 'frame105', src: 'frames/frame105.png', name: 'Square Gold26', ratio: '9/16' },
{ id: 'frame106', src: 'frames/frame106.png', name: 'Ornate Oval Gold26', ratio: '9/16' },
{ id: 'frame107', src: 'frames/frame107.png', name: 'Elegant Oval Gold26', ratio: '9/16' },
{ id: 'frame108', src: 'frames/frame108.png', name: 'Floral Gold26', ratio: '9/16' },
{ id: 'frame109', src: 'frames/frame109.png', name: 'Square Gold27', ratio: '9/16' },
{ id: 'frame110', src: 'frames/frame110.png', name: 'Ornate Oval Gold27', ratio: '9/16' },
{ id: 'frame111', src: 'frames/frame111.png', name: 'Elegant Oval Gold27', ratio: '9/16' },
{ id: 'frame112', src: 'frames/frame112.png', name: 'Floral Gold27', ratio: '9/16' },
{ id: 'frame113', src: 'frames/frame113.png', name: 'Square Gold28', ratio: '9/16' },
{ id: 'frame114', src: 'frames/frame114.png', name: 'Ornate Oval Gold28', ratio: '9/16' },
{ id: 'frame115', src: 'frames/frame115.png', name: 'Elegant Oval Gold28', ratio: '9/16' },
{ id: 'frame116', src: 'frames/frame116.png', name: 'Floral Gold28', ratio: '9/16' },
{ id: 'frame117', src: 'frames/frame117.png', name: 'Square Gold29', ratio: '9/16' },
{ id: 'frame118', src: 'frames/frame118.png', name: 'Ornate Oval Gold29', ratio: '9/16' },
{ id: 'frame119', src: 'frames/frame119.png', name: 'Elegant Oval Gold29', ratio: '9/16' },
{ id: 'frame120', src: 'frames/frame120.png', name: 'Floral Gold29', ratio: '9/16' },
{ id: 'frame121', src: 'frames/frame121.png', name: 'Square Gold30', ratio: '9/16' },
{ id: 'frame122', src: 'frames/frame122.png', name: 'Ornate Oval Gold30', ratio: '9/16' },
{ id: 'frame123', src: 'frames/frame123.png', name: 'Elegant Oval Gold30', ratio: '9/16' },
{ id: 'frame124', src: 'frames/frame124.png', name: 'Floral Gold30', ratio: '9/16' },
{ id: 'frame125', src: 'frames/frame125.png', name: 'Square Gold31', ratio: '9/16' },
{ id: 'frame126', src: 'frames/frame126.png', name: 'Ornate Oval Gold31', ratio: '9/16' },
{ id: 'frame127', src: 'frames/frame127.png', name: 'Elegant Oval Gold31', ratio: '9/16' },
{ id: 'frame128', src: 'frames/frame128.png', name: 'Floral Gold31', ratio: '9/16' },
{ id: 'frame129', src: 'frames/frame129.png', name: 'Square Gold32', ratio: '9/16' },
{ id: 'frame130', src: 'frames/frame130.png', name: 'Ornate Oval Gold32', ratio: '9/16' },
{ id: 'frame131', src: 'frames/frame131.png', name: 'Elegant Oval Gold32', ratio: '9/16' },
{ id: 'frame132', src: 'frames/frame132.png', name: 'Floral Gold32', ratio: '9/16' },
{ id: 'frame133', src: 'frames/frame133.png', name: 'Square Gold33', ratio: '9/16' },
{ id: 'frame134', src: 'frames/frame134.png', name: 'Ornate Oval Gold33', ratio: '9/16' },
{ id: 'frame135', src: 'frames/frame135.png', name: 'Elegant Oval Gold33', ratio: '9/16' },
{ id: 'frame136', src: 'frames/frame136.png', name: 'Floral Gold33', ratio: '9/16' },
{ id: 'frame137', src: 'frames/frame137.png', name: 'Square Gold34', ratio: '9/16' },
{ id: 'frame138', src: 'frames/frame138.png', name: 'Ornate Oval Gold34', ratio: '9/16' },
{ id: 'frame139', src: 'frames/frame139.png', name: 'Elegant Oval Gold34', ratio: '9/16' },
{ id: 'frame140', src: 'frames/frame140.png', name: 'Floral Gold34', ratio: '9/16' },
{ id: 'frame141', src: 'frames/frame141.png', name: 'Square Gold35', ratio: '9/16' },
{ id: 'frame142', src: 'frames/frame142.png', name: 'Ornate Oval Gold35', ratio: '9/16' },
{ id: 'frame143', src: 'frames/frame143.png', name: 'Elegant Oval Gold35', ratio: '9/16' },
{ id: 'frame144', src: 'frames/frame144.png', name: 'Floral Gold35', ratio: '9/16' },
{ id: 'frame145', src: 'frames/frame145.png', name: 'Square Gold36', ratio: '9/16' },
{ id: 'frame146', src: 'frames/frame146.png', name: 'Ornate Oval Gold36', ratio: '9/16' },
{ id: 'frame147', src: 'frames/frame147.png', name: 'Elegant Oval Gold36', ratio: '9/16' },
{ id: 'frame148', src: 'frames/frame148.png', name: 'Floral Gold36', ratio: '9/16' },
{ id: 'frame149', src: 'frames/frame149.png', name: 'Square Gold37', ratio: '9/16' },
{ id: 'frame150', src: 'frames/frame150.png', name: 'Ornate Oval Gold37', ratio: '9/16' }
];

// Canvas setup
const previewCanvas = document.getElementById('previewCanvas');
const ctx = previewCanvas.getContext('2d');
const frameOverlay = document.getElementById('frameOverlay');
const frameContainer = document.getElementById('frameContainer');
const initialPreviewOverlay = document.getElementById('initialPreviewOverlay');
const currentPreviewResolutionSpan = document.getElementById('currentPreviewResolution');

// Current state variables
let uploadedImage = null;
let selectedFrame = null; // Stores the frame data object
let currentRatio = { width: 1080, height: 1920 }; // Default to Portrait (9:16)
let fitCoverMode = 'contain';
let imageZoom = 100; // Percentage
let imagePanX = 0;   // Percentage, relative to image's current drawn size
let imagePanY = 0;   // Percentage, relative to image's current drawn size

// UI Elements
const themeToggleBtn = document.getElementById('themeToggleBtn');
const controlButtons = document.querySelectorAll('.control-button');
const accordionPanels = document.querySelectorAll('.accordion-panel');
const frameGallery = document.getElementById('frameGallery');
const imageUploadInput = document.getElementById('imageUpload');
const uploadBtn = document.querySelector('.upload-btn');
const fileNameDisplay = document.getElementById('fileNameDisplay');
const fitCoverSelect = document.getElementById('fitCover');
const imageZoomSlider = document.getElementById('imageZoom');
const zoomValueSpan = document.getElementById('zoomValue');
const imagePosXSlider = document.getElementById('imagePosX');
const posXValueSpan = document.getElementById('posXValue');
const imagePosYSlider = document.getElementById('imagePosY');
const posYValueSpan = document.getElementById('posYValue');
const downloadBtn = document.getElementById('downloadBtn');
const resetButtons = document.querySelectorAll('.reset-button');
const ratioPortraitBtn = document.getElementById('ratioPortrait');


// --- Helper Functions ---

/**
 * Applies the current ratio dimensions to the canvas and redraws.
 */
function applyCanvasDimensions() {
    previewCanvas.width = currentRatio.width;
    previewCanvas.height = currentRatio.height;
    frameContainer.style.aspectRatio = `${currentRatio.width} / ${currentRatio.height}`;
    currentPreviewResolutionSpan.textContent = `${currentRatio.width}x${currentRatio.height}`;
    redrawCanvas();
}

/**
 * Redraws the uploaded image onto the canvas, applying fit/cover, zoom, and pan.
 */
function redrawCanvas() {
    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height); // Clear the entire canvas

    if (!uploadedImage) {
        // If no image is uploaded, show the resolution text overlay on the canvas.
        currentPreviewResolutionSpan.style.display = 'block';
        return;
    } else {
        currentPreviewResolutionSpan.style.display = 'none'; // Hide if an image is present
    }

    // Calculate source and destination dimensions
    let sourceWidth = uploadedImage.width;
    let sourceHeight = uploadedImage.height;
    let destWidth = previewCanvas.width;
    let destHeight = previewCanvas.height;

    let imageAspectRatio = sourceWidth / sourceHeight;
    let canvasAspectRatio = destWidth / destHeight;

    let drawWidth, drawHeight;

    // Determine base draw dimensions based on fit/cover mode
    if (fitCoverMode === 'contain') {
        // Image must fit entirely within the canvas, possibly leaving empty space
        if (imageAspectRatio > canvasAspectRatio) {
            drawWidth = destWidth;
            drawHeight = destWidth / imageAspectRatio;
        } else {
            drawHeight = destHeight;
            drawWidth = destHeight * imageAspectRatio;
        }
    } else { // 'cover'
        // Image must cover the entire canvas, possibly cropping parts of the image
        if (imageAspectRatio < canvasAspectRatio) {
            drawWidth = destWidth;
            drawHeight = destWidth / imageAspectRatio;
        } else {
            drawHeight = destHeight;
            drawWidth = destHeight * imageAspectRatio;
        }
    }

    // Apply zoom
    drawWidth *= (imageZoom / 100);
    drawHeight *= (imageZoom / 100);

    // Calculate initial centered position
    let destX = (destWidth - drawWidth) / 2;
    let destY = (destHeight - drawHeight) / 2;

    // Apply pan (percentage of the image's drawn dimension relative to original center)
    destX += (imagePanX / 100) * drawWidth * 0.5;
    destY += (imagePanY / 100) * drawHeight * 0.5;

    ctx.drawImage(uploadedImage, destX, destY, drawWidth, drawHeight);
}

/**
 * Enables or disables image related controls (upload, fit/cover, zoom, pan, download).
 * @param {boolean} enable - True to enable, false to disable.
 */
function enableImageControls(enable) {
    imageUploadInput.disabled = !enable;
    uploadBtn.disabled = !enable;
    // These only enable if an image IS uploaded, even if overall controls are enabled by frame selection
    fitCoverSelect.disabled = !enable || !uploadedImage;
    imageZoomSlider.disabled = !enable || !uploadedImage;
    imagePosXSlider.disabled = !enable || !uploadedImage;
    imagePosYSlider.disabled = !enable || !uploadedImage;
    downloadBtn.disabled = !enable || !uploadedImage;

    // Reset values visually if disabling
    if (!enable) {
        fileNameDisplay.textContent = 'No file chosen';
        imageZoomSlider.value = 100;
        zoomValueSpan.textContent = '100%';
        imagePosXSlider.value = 0;
        posXValueSpan.textContent = '0%';
        imagePosYSlider.value = 0;
        posYValueSpan.textContent = '0%';
    }
}


// --- Event Listeners ---

// Theme Toggle
themeToggleBtn.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggleBtn.textContent = document.body.dataset.theme === 'dark' ? '🌙' : '☀️';
});

// Accordion Controls: Handles showing/hiding panels and button active state
controlButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.dataset.target;
        const targetPanel = document.getElementById(targetId);

        // Deactivate all buttons and hide all panels first
        controlButtons.forEach(btn => btn.classList.remove('active'));
        accordionPanels.forEach(panel => panel.classList.remove('active'));

        // Activate clicked button and show its panel
        button.classList.add('active');
        targetPanel.classList.add('active');

        // Re-evaluate image control enablement based on current state (frame selected, image uploaded)
        if (selectedFrame) {
            enableImageControls(true); // Re-enables if a frame is selected
        }
    });
});

// Initialize Accordion (show 'PHOTO-FRAME' panel by default on load)
document.addEventListener('DOMContentLoaded', () => {
    // Show 'PHOTO-FRAME' panel by default
    const initialButton = document.querySelector('.control-button[data-target="frame-controls"]');
    if (initialButton) {
        initialButton.click(); // Programmatically click to activate
    }
    // Set default theme
    document.body.dataset.theme = 'light';
    themeToggleBtn.textContent = '☀️';
    applyCanvasDimensions(); // Set initial canvas size based on default ratio
    enableImageControls(false); // Initially disable image controls until frame is selected
});


// Frame Gallery Generation and Selection
function populateFrameGallery() {
    frameGallery.innerHTML = ''; // Clear existing thumbnails
    frameData.forEach(frame => {
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('frame-thumbnail');
        thumbnailDiv.dataset.frameId = frame.id;
        thumbnailDiv.dataset.frameSrc = frame.src;

        const img = document.createElement('img');
        img.src = frame.src;
        img.alt = frame.name;
        thumbnailDiv.appendChild(img);

        thumbnailDiv.addEventListener('click', () => {
            // Remove 'selected' class from previously selected thumbnail
            document.querySelectorAll('.frame-thumbnail').forEach(thumb => thumb.classList.remove('selected'));
            // Add 'selected' class to the clicked thumbnail
            thumbnailDiv.classList.add('selected');
            selectedFrame = frame; // Store the full selected frame data object

            frameOverlay.src = frame.src; // Set the frame image source
            frameOverlay.classList.add('active'); // Make the frame overlay visible

            // Activate preview mode: hide initial instruction overlay, show canvas & resolution text
            frameContainer.classList.add('active-preview-mode');

            // Enable upload and adjustment controls now that a frame is selected
            enableImageControls(true);
            redrawCanvas(); // Redraw canvas to show resolution if no image, or the image if present
        });
        frameGallery.appendChild(thumbnailDiv);
    });
}
populateFrameGallery(); // Call to populate the gallery on page load


// Image Upload
imageUploadInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        fileNameDisplay.textContent = file.name;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                uploadedImage = img;
                // Once image is loaded, ensure image controls are enabled and redraw
                enableImageControls(true); // Re-enable based on image presence
                redrawCanvas();
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        // If file input cleared or no file selected
        fileNameDisplay.textContent = 'No file chosen';
        uploadedImage = null;
        redrawCanvas(); // Clear canvas
        enableImageControls(true); // Still enable other controls if frame is selected
    }
});

// Make the "Choose File" button trigger the hidden file input
uploadBtn.addEventListener('click', () => {
    if (!uploadBtn.disabled) {
        imageUploadInput.click();
    }
});


// Image Adjustment Controls
fitCoverSelect.addEventListener('change', (event) => {
    fitCoverMode = event.target.value;
    redrawCanvas();
});

imageZoomSlider.addEventListener('input', (event) => {
    imageZoom = parseInt(event.target.value);
    zoomValueSpan.textContent = `${imageZoom}%`;
    redrawCanvas();
});

imagePosXSlider.addEventListener('input', (event) => {
    imagePanX = parseInt(event.target.value);
    posXValueSpan.textContent = `${imagePanX}%`;
    redrawCanvas();
});

imagePosYSlider.addEventListener('input', (event) => {
    imagePanY = parseInt(event.target.value);
    posYValueSpan.textContent = `${imagePanY}%`;
    redrawCanvas();
});

// Reset Buttons
resetButtons.forEach(button => {
    button.addEventListener('click', () => {
        const resetTarget = button.dataset.resetTarget;
        switch (resetTarget) {
            case 'full':
                // Reset frame selection
                document.querySelectorAll('.frame-thumbnail').forEach(thumb => thumb.classList.remove('selected'));
                selectedFrame = null;
                frameOverlay.src = '';
                frameOverlay.classList.remove('active');
                frameContainer.classList.remove('active-preview-mode'); // Show initial overlay

                // Reset image and all adjustments
                uploadedImage = null;
                fileNameDisplay.textContent = 'No file chosen';
                fitCoverMode = 'contain';
                imageZoom = 100;
                imagePanX = 0;
                imagePanY = 0;
                
                // Update UI for all image controls
                fitCoverSelect.value = 'contain';
                imageZoomSlider.value = 100;
                zoomValueSpan.textContent = '100%';
                imagePosXSlider.value = 0;
                posXValueSpan.textContent = '0%';
                imagePosYSlider.value = 0;
                posYValueSpan.textContent = '0%';
                
                enableImageControls(false); // Disable all image controls until new frame is chosen
                redrawCanvas(); // Clear canvas
                applyCanvasDimensions(); // Re-apply default canvas dimensions (effectively clears it if no image)
                
                // Programmatically click the 'PHOTO-FRAME' button to ensure its panel is active
                const initialButton = document.querySelector('.control-button[data-target="frame-controls"]');
                if (initialButton) {
                    initialButton.click(); 
                }
                break;
            case 'image':
                // Reset only the uploaded image and its related adjustments, keep frame selected
                uploadedImage = null;
                fileNameDisplay.textContent = 'No file chosen';
                
                // Reset adjustments
                fitCoverMode = 'contain';
                imageZoom = 100;
                imagePanX = 0;
                imagePanY = 0;
                
                // Update UI for image controls
                fitCoverSelect.value = 'contain';
                imageZoomSlider.value = 100;
                zoomValueSpan.textContent = '100%';
                imagePosXSlider.value = 0;
                posXValueSpan.textContent = '0%';
                imagePosYSlider.value = 0;
                posYValueSpan.textContent = '0%';
                
                redrawCanvas(); // Clear image from canvas
                // Re-enable controls if frame is selected (as per `enableImageControls` logic)
                if (selectedFrame) {
                    enableImageControls(true); 
                }
                break;
            case 'image-adjustments':
                // Reset only adjustments, keep image and frame selected
                fitCoverMode = 'contain';
                imageZoom = 100;
                imagePanX = 0;
                imagePanY = 0;

                // Update UI for adjustment controls
                fitCoverSelect.value = 'contain';
                imageZoomSlider.value = 100;
                zoomValueSpan.textContent = '100%';
                imagePosXSlider.value = 0;
                posXValueSpan.textContent = '0%';
                imagePosYSlider.value = 0;
                posYValueSpan.textContent = '0%';
                redrawCanvas();
                break;
        }
    });
});


// Download PNG
downloadBtn.addEventListener('click', () => {
    if (!downloadBtn.disabled && selectedFrame) {
        // Create a temporary offscreen canvas for the final image
        const finalCanvas = document.createElement('canvas');
        finalCanvas.width = previewCanvas.width;
        finalCanvas.height = previewCanvas.height;
        const finalCtx = finalCanvas.getContext('2d');

        // Draw the content of the previewCanvas (user's image with applied transformations)
        finalCtx.drawImage(previewCanvas, 0, 0);

        // Ensure the frame overlay image is loaded before drawing it
        // This is important if for some reason the frame image hasn't fully loaded in the DOM yet,
        // though it should be loaded if visible.
        if (frameOverlay.complete && frameOverlay.naturalWidth > 0) {
            // Draw the frame overlay on top of the image
            finalCtx.drawImage(frameOverlay, 0, 0, finalCanvas.width, finalCanvas.height);

            // Create a download link for the combined image
            const link = document.createElement('a');
            link.download = 'VilayashPhotoFrame.png';
            link.href = finalCanvas.toDataURL('image/png');
            link.click();
        } else {
            console.warn("Frame overlay image not loaded or invalid. Cannot download.");
            alert("The selected frame image is not fully loaded. Please wait a moment and try again.");
        }
    } else if (!selectedFrame) {
        alert("Please select a photo frame before attempting to download.");
    } else {
        alert("Please upload an image before attempting to download.");
    }
});