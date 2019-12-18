<!Doctype html>
<html>
    <head>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-37218017-3"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-37218017-3');
      </script>
    <!-- ccc -->
        <title>Timeline</title>
        <meta charset="utf-8" >
        <link rel="stylesheet" type="text/css" href="main.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="wrapper" onclick="return true">
            <div class="wrapper__wrapper">
                <div class="top">
                    <div class="top__logo"><?php echo file_get_contents('assets/logo.php'); ?></div>
                    <div class="top__heading">
                        <b>At a Glance: Libya’s Transformation 2011-2018</b>
                        <div>An interactive overview</div>
                    </div>
                    <a class="top__recommendations" href="assets/Libyas-Transformation-2011-2018.pdf" target="_blank">PDF version</a>
                </div>
                <div class="lines">
                    <?php include("parts/top-line.php"); ?>

                    <?php include("parts/line-blue.php"); ?>
                    <?php include("parts/line-green.php"); ?>
                    <?php include("parts/line-purple.php"); ?>

                    <?php echo file_get_contents("parts/dots.php"); ?>
                </div>
            </div>

            <div class="overlay"></div>
            <?php include("parts/right-panel-blue.php"); ?>
            <?php include("parts/right-panel-green.php"); ?>
            <?php include("parts/right-panel-purple.php"); ?>
        </div>
        <div class="wrapper__bottom">
            Click on the dots in the timeline above to read about key events in Libya since 2011. <span id="bottom-more">More on this publication.</span>
        </div>

        <div class="btn-popup__overlay"></div>
        <div class="btn-popup">
            <div class="btn-popup__close">
                <div class="btn-popup__cross"><?php echo file_get_contents("parts/svg/close.svg"); ?></div>
            </div>
            <div class="btn-popup__wrapper">
                <div class="btn-popup__date"></div>
                <div class="btn-popup__heading"></div>
                <div class="btn-popup__text"></div>
            </div>
        </div>

        <div class="more-info">
            <div class="more-info__wrapper">
                <div class="more-info__close"><?php echo file_get_contents("parts/svg/close.svg"); ?></div>
                Libya’s developments since the 2011 revolution have been confusing. We connect the dots of how the country got to where it is now. When navigating through the three levels, you can find out what happened when in terms of politics, conflict and the economy. And you can read our analyses, which offer an interpretation of the periods 2011-2013, 2014-2016, and 2017-2018 tying the three strands back together. If you prefer reading this as a conventional report, click on the pdf document.
                This timeline is a DRI publication and was authored by Emadeddine Badi, Mohamed El-Jarh and Marwa Farid. Several experts on Libya were consulted as well. It was produced with the kind support of the German Federal Foreign Office. The content of this publication is the sole responsibility of DRI and can in no way be taken to reflect the views of the German Federal Foreign Office.
            </div>
        </div>

        <script src="jQuery-3-4-0.js"></script>
        <script src="scrollTo.js"></script>
        <script src="script.js"></script>
    </body>
</html>
