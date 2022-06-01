    $(document).ready(function () {
        function scrollInternalLink(event) {
          const id = $(this).attr('href');
            if (id[0] != '#') return;
            event.preventDefault()
          const headerHight = $('#header-container').height();
          const top = $(id).offset().top;

          $('body,html').animate({ scrollTop: top - headerHight }, 1300);
        }

        $('a').on('click', scrollInternalLink);
        $('#btnToTop').on('click', scrollInternalLink);
      });