<?php

$CONFIG = [
/**
 * Default Parameters
 */
  'trusted_domains' =>
   [
    'brylnfyizwbb9nqu0stv-postgresql.services.clever-cloud.com',
    'nextcloud.meetfur.com',
    'app-c60a335e-652d-4bab-9725-2a1cffa5df32.cleverapps.io'
   ],

   'version' => '0.1',

   'dbtype' => 'pgsql',
   'dbhost' => getenv("POSTGRESQL_ADDON_HOST"),
   'dbname' => getenv("POSTGRESQL_ADDON_NAME"),
   'dbuser' => getenv("POSTGRESQL_ADDON_USER"),
   'dbpassword' => getenv("POSTGRESQL_ADDON_PASSWORD"),
   
   /**
   * Indicates whether the Nextcloud instance was installed successfully; ``true``
   * indicates a successful installation, and ``false`` indicates an unsuccessful
   * installation.
   *
   * Defaults to ``false``
   */
   //'installed' => true,

   /**
   * Add request id to the database query in a comment.
   *
   * This can be enabled to assist in mapping database logs to Nextcloud logs.
   */
   'db.log_request_id' => true,



   'default_locale' => 'fr_FR'
   'default_language' => 'fr',
   'default_phone_region' => 'FR',
   'default_timezone' => 'Europe/Paris',

   'knowledgebaseenabled' => false,
   'allow_user_to_change_display_name' => true,

   'auth.bruteforce.protection.enabled' => true,
   'ratelimit.protection.enabled' => true,
   'auth.webauthn.enabled' => true,
   'auth.storeCryptedPassword' => true,

   'lost_password_link' => 'https://nextcloud.meetfur.com/password/reset',

   'trashbin_retention_obligation' => 'auto',

   'versions_retention_obligation' => 'auto',

  'appcodechecker' => true,
  'updatechecker' => true,

  'enable_previews' => true,
  'preview_concurrency_all' => 8,
  'preview_max_x' => 4096,
  'preview_max_y' => 4096,
  'preview_max_filesize_image' => 50,
  'preview_max_memory' => 256,
  'enabledPreviewProviders' => [
        'OC\Preview\BMP',
        'OC\Preview\GIF',
        'OC\Preview\JPEG',
        'OC\Preview\Krita',
        'OC\Preview\MarkDown',
        'OC\Preview\MP3',
        'OC\Preview\OpenDocument',
        'OC\Preview\PNG',
        'OC\Preview\TXT',
        'OC\Preview\XBitmap',
        'OC\Preview\Font',
        'OC\Preview\HEIC',
        'OC\Preview\Illustrator',
        'OC\Preview\Movie',
        'OC\Preview\MSOffice2003',
        'OC\Preview\MSOffice2007',
        'OC\Preview\MSOfficeDoc',
        'OC\Preview\PDF',
        'OC\Preview\Photoshop',
        'OC\Preview\Postscript',
        'OC\Preview\StarOffice',
        'OC\Preview\SVG',
        'OC\Preview\TIFF',
        'OC\Preview\EMF',
  ],

  /**
  * Lifetime of the remember login cookie. This should be larger than the
  * session_lifetime. If it is set to 0 remember me is disabled.
  *
  * Defaults to ``60*60*24*15`` seconds (15 days)
  */
  'remember_login_cookie_lifetime' => 60*60*24*15,


];
